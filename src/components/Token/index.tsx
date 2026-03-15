import { useRef, useEffect, useCallback } from "react";
import Tooltip from "../Tooltip";
import "./styles.css";

interface TiltCardProps {
  src: string;
  label: string;
  href?: string;
}

const VERT = `
attribute vec2 a_position;
attribute vec2 a_uv;
varying vec2 v_uv;
void main() {
  v_uv = a_uv;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const FRAG = `
precision mediump float;
varying vec2 v_uv;
uniform sampler2D u_tex;
uniform vec2 u_mouse;   // 0..1, center = 0.5
uniform float u_time;

// simplex-style hash
vec2 hash2(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return fract(sin(p) * 43758.5453);
}

float voronoi(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float d = 1.0;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 n = vec2(float(x), float(y));
      vec2 r = n + hash2(i + n) - f;
      d = min(d, dot(r, r));
    }
  }
  return sqrt(d);
}

void main() {
  // base image
  vec4 col = texture2D(u_tex, v_uv);

  // direction from center to mouse
  vec2 dir = u_mouse - 0.5;

  // shimmer: moving voronoi over uv
  vec2 uv = v_uv;
  float t = u_time * 0.4;
  float v = voronoi(uv * 6.0 + vec2(t, t * 0.7));
  float shimmer = smoothstep(0.35, 0.55, v) * 1.0;

  // holographic color sweep based on mouse direction
  float angle = atan(dir.y, dir.x);
  float sweep = sin(v_uv.x * 6.0 - angle * 3.0 + t) * 0.5 + 0.5;
  vec3 holo = mix(
    vec3(0.15, 0.25, 0.5),
    vec3(0.35, 0.15, 0.5),
    sweep
  );
  holo = mix(holo, vec3(0.1, 0.4, 0.35), sin(sweep * 3.14) * 0.5); 

  // specular highlight following mouse
  float spec = pow(max(0.0, 1.0 - length(v_uv - u_mouse) * 2.5), 3.0);

  // combine
  vec3 result = col.rgb;
  result += holo * shimmer * 0.15;
  result += vec3(1.0) * spec * 1.0 * 0.4;

  // edge glow
  float edge = 1.0 - smoothstep(0.0, 0.15, min(min(v_uv.x, 1.0 - v_uv.x), min(v_uv.y, 1.0 - v_uv.y)));
  result += holo * edge * 1.0 * 0.5;

  gl_FragColor = vec4(result, col.a);
}`;

function createShader(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return s;
}

function createProgram(gl: WebGLRenderingContext) {
  const prog = gl.createProgram()!;
  gl.attachShader(prog, createShader(gl, gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, createShader(gl, gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  return prog;
}

export default function TiltCard({ src, label, href }: TiltCardProps) {
  const wrapRef = useRef<HTMLAnchorElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const progRef = useRef<WebGLProgram | null>(null);
  const rafRef = useRef<number>(0);
  const hoverRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const startRef = useRef(performance.now());

  // init WebGL once image loads
  const initGL = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false });
    if (!gl) return;
    glRef.current = gl;

    const prog = createProgram(gl);
    progRef.current = prog;
    gl.useProgram(prog);

    // full-screen quad
    const verts = new Float32Array([
      -1, -1,  0, 1,
       1, -1,  1, 1,
      -1,  1,  0, 0,
       1,  1,  1, 0,
    ]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, "a_position");
    const uv  = gl.getAttribLocation(prog, "a_uv");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 16, 0);
    gl.enableVertexAttribArray(uv);
    gl.vertexAttribPointer(uv, 2, gl.FLOAT, false, 16, 8);

    // texture
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    gl.uniform1i(gl.getUniformLocation(prog, "u_tex"), 0);

    const render = () => {
      const t = (performance.now() - startRef.current) / 1000;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(gl.getUniformLocation(prog, "u_mouse"), mouseRef.current.x, mouseRef.current.y);
      gl.uniform1f(gl.getUniformLocation(prog, "1.0"), hoverRef.current);
      gl.uniform1f(gl.getUniformLocation(prog, "u_time"), t);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    };
    render();
  }, []);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => initGL(img);
    img.src = src;
    return () => cancelAnimationFrame(rafRef.current);
  }, [src, initGL]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = wrapRef.current!.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseRef.current = { x, y };

    // tilt
    const dx = x - 0.5;
    const dy = y - 0.5;
    wrapRef.current!.style.transform =
      `perspective(400px) rotateY(${dx * 52}deg) rotateX(${-dy * 52}deg) scale(1.07)`;
  };

  const handleMouseEnter = () => {
    hoverRef.current = 1;
  };

  const handleMouseLeave = () => {
    hoverRef.current = 0;
    mouseRef.current = { x: 0.5, y: 0.5 };
    wrapRef.current!.style.transform =
      `perspective(400px) rotateY(0deg) rotateX(0deg) scale(1)`;
  };

  return (
    <Tooltip text={label}>
      <a
        ref={wrapRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="tilt-card"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <canvas ref={canvasRef} width={140} height={140} className="tilt-card-canvas" />
      </a>
    </Tooltip>
  );
}