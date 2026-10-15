import { Renderer, Program, Mesh, Triangle } from "ogl";
import { useEffect, useRef } from "react";

import "./styles.css";

interface BalatroProps {
  spinRotation?: number;
  spinSpeed?: number;
  offset?: [number, number];
  color1?: string;
  color2?: string;
  color3?: string;
  contrast?: number;
  lighting?: number;
  spinAmount?: number;
  pixelFilter?: number;
  spinEase?: number;
  isRotate?: boolean;
  mouseInteraction?: boolean;
  pulseStrength?: number;
  pulseDuration?: number;
  colorDuration?: number;
}

function hexToVec4(hex: string): [number, number, number, number] {
  let hexStr = hex.replace("#", "");
  let r = 0,
    g = 0,
    b = 0,
    a = 1;
  if (hexStr.length === 6) {
    r = parseInt(hexStr.slice(0, 2), 16) / 255;
    g = parseInt(hexStr.slice(2, 4), 16) / 255;
    b = parseInt(hexStr.slice(4, 6), 16) / 255;
  } else if (hexStr.length === 8) {
    r = parseInt(hexStr.slice(0, 2), 16) / 255;
    g = parseInt(hexStr.slice(2, 4), 16) / 255;
    b = parseInt(hexStr.slice(4, 6), 16) / 255;
    a = parseInt(hexStr.slice(6, 8), 16) / 255;
  }
  return [r, g, b, a];
}

type RGBA = [number, number, number, number];

function lerpRGBA(a: RGBA, b: RGBA, t: number): RGBA {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
    a[3] + (b[3] - a[3]) * t,
  ];
}

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

#define PI 3.14159265359

uniform float iTime;
uniform vec3 iResolution;
uniform float uSpinRotation;
uniform float uSpinSpeed;
uniform vec2 uOffset;
uniform vec4 uColor1;
uniform vec4 uColor2;
uniform vec4 uColor3;
uniform float uContrast;
uniform float uLighting;
uniform float uSpinAmount;
uniform float uPixelFilter;
uniform float uSpinEase;
uniform bool uIsRotate;
uniform vec2 uMouse;
uniform float uPulse;
uniform float uPhase;

varying vec2 vUv;

vec4 effect(vec2 screenSize, vec2 screen_coords) {
    float pixel_size = length(screenSize.xy) / uPixelFilter;
    vec2 uv = (floor(screen_coords.xy * (1.0 / pixel_size)) * pixel_size - 0.5 * screenSize.xy) / length(screenSize.xy) - uOffset;
    float uv_len = length(uv);

    float speed = (uSpinRotation * uSpinEase * 0.2);
    if(uIsRotate){
       speed = iTime * speed;
    }
    speed += 302.2;

    float mouseInfluence = (uMouse.x * 2.0 - 1.0);
    speed += mouseInfluence * 0.1;

    float new_pixel_angle = atan(uv.y, uv.x) + speed - uSpinEase * 20.0 * (uSpinAmount * uv_len + (1.0 - uSpinAmount));
    vec2 mid = (screenSize.xy / length(screenSize.xy)) / 2.0;
    uv = (vec2(uv_len * cos(new_pixel_angle) + mid.x, uv_len * sin(new_pixel_angle) + mid.y) - mid);

    uv *= 30.0;
    float baseSpeed = iTime * uSpinSpeed + uPhase;
    speed = baseSpeed + mouseInfluence * 2.0;

    vec2 uv2 = vec2(uv.x + uv.y);

    for(int i = 0; i < 5; i++) {
        uv2 += sin(max(uv.x, uv.y)) + uv;
        uv += 0.5 * vec2(
            cos(5.1123314 + 0.353 * uv2.y + speed * 0.131121),
            sin(uv2.x - 0.113 * speed)
        );
        uv -= cos(uv.x + uv.y) - sin(uv.x * 0.711 - uv.y);
    }

    float contrast_mod = (0.25 * uContrast + 0.5 * uSpinAmount + 1.2);
    float paint_res = min(2.0, max(0.0, length(uv) * 0.035 * contrast_mod));
    float c1p = max(0.0, 1.0 - contrast_mod * abs(1.0 - paint_res));
    float c2p = max(0.0, 1.0 - contrast_mod * abs(paint_res));
    float c3p = 1.0 - min(1.0, c1p + c2p);
    float light = (uLighting - 0.2) * max(c1p * 5.0 - 4.0, 0.0) + uLighting * max(c2p * 5.0 - 4.0, 0.0);

    return (0.3 / uContrast) * uColor1 + (1.0 - 0.3 / uContrast) * (uColor1 * c1p + uColor2 * c2p + vec4(c3p * uColor3.rgb, c3p * uColor1.a)) + light + uPulse * 0.02;
}

void main() {
    vec2 uv = vUv * iResolution.xy;
    gl_FragColor = effect(iResolution.xy, uv);
}
`;

export default function Balatro({
  spinRotation = -2.0,
  spinSpeed = 7.0,
  offset = [0.0, 0.0],
  color1 = "#DE443B",
  color2 = "#006BB4",
  color3 = "#162325",
  contrast = 3.5,
  lighting = 0.4,
  spinAmount = 0.25,
  pixelFilter = 745.0,
  spinEase = 1.0,
  isRotate = false,
  mouseInteraction = true,
  pulseStrength = 3.0,
  pulseDuration = 1600,
  colorDuration = pulseDuration * 2,
}: BalatroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const programRef = useRef<Program | null>(null);

  const colorRef = useRef<{ c1: RGBA; c2: RGBA; c3: RGBA }>({
    c1: hexToVec4(color1),
    c2: hexToVec4(color2),
    c3: hexToVec4(color3),
  });
  const colorAnim = useRef<{
    from: { c1: RGBA; c2: RGBA; c3: RGBA };
    to: { c1: RGBA; c2: RGBA; c3: RGBA };
    start: number;
  } | null>(null);
  const pulseRef = useRef<number | null>(null);
  const prevColors = useRef<[string, string, string] | null>(null);

  useEffect(() => {
    colorAnim.current = {
      from: {
        c1: [...colorRef.current.c1] as RGBA,
        c2: [...colorRef.current.c2] as RGBA,
        c3: [...colorRef.current.c3] as RGBA,
      },
      to: {
        c1: hexToVec4(color1),
        c2: hexToVec4(color2),
        c3: hexToVec4(color3),
      },
      start: performance.now(),
    };
    const prev = prevColors.current;
    if (prev && (prev[0] !== color1 || prev[1] !== color2 || prev[2] !== color3)) {
      pulseRef.current = performance.now();
    }
    prevColors.current = [color1, color2, color3];
  }, [color1, color2, color3]);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const renderer = new Renderer();
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 1);

    let program: Program;
    let resizeObserver: ResizeObserver | null = null;

    function resize() {
      if (destroyed || !container) return;
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      if (program) {
        program.uniforms.iResolution.value = [
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height,
        ];
      }
    }

    function forceRedraw() {
      if (destroyed) return;
      resize();
      if (program) {
        program.uniforms.iTime.value = performance.now() * 0.001;
      }
    }

    window.addEventListener("resize", resize);

    window.addEventListener("scroll", forceRedraw);

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        forceRedraw();
      });
      resizeObserver.observe(container);
    }

    let destroyed = false;
    let spinPhase = 0;
    let lastTime = 0;

    resize();

    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: [
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height,
          ],
        },
        uSpinRotation: { value: spinRotation },
        uSpinSpeed: { value: spinSpeed },
        uOffset: { value: offset },
        uColor1: { value: colorRef.current.c1 },
        uColor2: { value: colorRef.current.c2 },
        uColor3: { value: colorRef.current.c3 },
        uContrast: { value: contrast },
        uLighting: { value: lighting },
        uSpinAmount: { value: spinAmount },
        uPixelFilter: { value: pixelFilter },
        uSpinEase: { value: spinEase },
        uIsRotate: { value: isRotate },
        uMouse: { value: [0.5, 0.5] },
        uPulse: { value: 0 },
        uPhase: { value: 0 },
      },
    });

    programRef.current = program;
    const mesh = new Mesh(gl, { geometry, program });
    let animationFrameId: number;

    function update(time: number) {
      if (destroyed) return;
      animationFrameId = requestAnimationFrame(update);
      program.uniforms.iTime.value = time * 0.001;

      const anim = colorAnim.current;
      if (anim) {
        const t = Math.min(1, (time - anim.start) / colorDuration);
        const e = 1 - Math.pow(1 - t, 3);
        const cur = {
          c1: lerpRGBA(anim.from.c1, anim.to.c1, e),
          c2: lerpRGBA(anim.from.c2, anim.to.c2, e),
          c3: lerpRGBA(anim.from.c3, anim.to.c3, e),
        };
        colorRef.current = cur;
        program.uniforms.uColor1.value = cur.c1;
        program.uniforms.uColor2.value = cur.c2;
        program.uniforms.uColor3.value = cur.c3;
        if (t >= 1) colorAnim.current = null;
      }

      let pulseVal = 0;
      if (pulseRef.current != null) {
        const t = Math.min(1, (time - pulseRef.current) / pulseDuration);
        const attack = 0.12;
        const env =
          t < attack
            ? 1 - Math.pow(1 - t / attack, 2)
            : 1 - Math.pow((t - attack) / (1 - attack), 2);
        pulseVal = env * pulseStrength;
        if (t >= 1) pulseRef.current = null;
      }
      program.uniforms.uPulse.value = pulseVal;

      const seconds = time * 0.001;
      const dt = lastTime ? Math.min(0.05, seconds - lastTime) : 0;
      lastTime = seconds;
      spinPhase += dt * spinSpeed * pulseVal;
      program.uniforms.uPhase.value = spinPhase;

      renderer.render({ scene: mesh });
    }
    animationFrameId = requestAnimationFrame(update);
    container.appendChild(gl.canvas);

    function handleMouseMove(e: MouseEvent) {
      if (!mouseInteraction) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      program.uniforms.uMouse.value = [x, y];
    }
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      destroyed = true;
      cancelAnimationFrame(animationFrameId);
      programRef.current = null;
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", forceRedraw);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeChild(gl.canvas);
    };
  }, []);

  return <div ref={containerRef} className="balatro-container" />;
}
