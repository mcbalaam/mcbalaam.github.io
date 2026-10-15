import {
	useEffect,
	useRef,
	useState,
	type PointerEvent as ReactPointerEvent,
} from "react";
import { Palette, Sun, Moon } from "lucide-react";
import { Button } from "@mcbalaam/razdor-ui";
import "./styles.css";

const PRESETS = [
	"#6e60a9",
	"#56a8a7",
	"#5fa87d",
	"#d7bb4c",
	"#c87e60",
	"#ad5e55",
	"#aa4d6c",
	"#94669f",
];

type HSV = { h: number; s: number; v: number };

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

function hexToRgb(hex: string): [number, number, number] {
	const h = hex.replace("#", "");
	return [
		parseInt(h.slice(0, 2), 16) / 255,
		parseInt(h.slice(2, 4), 16) / 255,
		parseInt(h.slice(4, 6), 16) / 255,
	];
}

function rgbToHex(r: number, g: number, b: number): string {
	const to = (v: number) =>
		Math.round(v * 255).toString(16).padStart(2, "0");
	return `#${to(r)}${to(g)}${to(b)}`;
}

function rgbToHsv(r: number, g: number, b: number): HSV {
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const d = max - min;
	let h = 0;
	if (d !== 0) {
		if (max === r) h = ((g - b) / d) % 6;
		else if (max === g) h = (b - r) / d + 2;
		else h = (r - g) / d + 4;
		h *= 60;
		if (h < 0) h += 360;
	}
	return { h, s: max === 0 ? 0 : d / max, v: max };
}

function hsvToRgb(h: number, s: number, v: number): [number, number, number] {
	const c = v * s;
	const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
	const m = v - c;
	let r = 0;
	let g = 0;
	let b = 0;
	if (h < 60) [r, g, b] = [c, x, 0];
	else if (h < 120) [r, g, b] = [x, c, 0];
	else if (h < 180) [r, g, b] = [0, c, x];
	else if (h < 240) [r, g, b] = [0, x, c];
	else if (h < 300) [r, g, b] = [x, 0, c];
	else [r, g, b] = [c, 0, x];
	return [r + m, g + m, b + m];
}

const hsvToHex = ({ h, s, v }: HSV) => {
	const [r, g, b] = hsvToRgb(h, s, v);
	return rgbToHex(r, g, b);
};

const hexToHsv = (hex: string) => {
	const [r, g, b] = hexToRgb(hex);
	return rgbToHsv(r, g, b);
};

interface ColorPickerProps {
	seed: string;
	onChange: (seed: string) => void;
	theme: "dark" | "light";
	onToggleTheme: () => void;
}

export default function ColorPicker({
	seed,
	onChange,
	theme,
	onToggleTheme,
}: ColorPickerProps) {
	const [open, setOpen] = useState(false);
	const [hsv, setHsv] = useState<HSV>(() => hexToHsv(seed));

	const hsvRef = useRef(hsv);
	const dragging = useRef(false);
	const rootRef = useRef<HTMLDivElement>(null);
	const areaRef = useRef<HTMLDivElement>(null);
	const hueRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (dragging.current) return;
		const next = hexToHsv(seed);
		hsvRef.current = next;
		setHsv(next);
	}, [seed]);

	useEffect(() => {
		if (!open) return;
		const onPointerDown = (e: MouseEvent) => {
			if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
				setOpen(false);
			}
		};
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
		};
		document.addEventListener("mousedown", onPointerDown);
		document.addEventListener("keydown", onKeyDown);
		return () => {
			document.removeEventListener("mousedown", onPointerDown);
			document.removeEventListener("keydown", onKeyDown);
		};
	}, [open]);

	const pickFrom = (kind: "area" | "hue") => (e: ReactPointerEvent) => {
		const el = kind === "area" ? areaRef.current : hueRef.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const x = clamp01((e.clientX - rect.left) / rect.width);
		const y = clamp01((e.clientY - rect.top) / rect.height);
		const cur = hsvRef.current;
		const next: HSV =
			kind === "area"
				? { h: cur.h, s: x, v: 1 - y }
				: { h: x * 360, s: cur.s, v: cur.v };
		hsvRef.current = next;
		setHsv(next);
	};

	const startDrag = (kind: "area" | "hue") => (e: ReactPointerEvent) => {
		e.preventDefault();
		dragging.current = true;
		e.currentTarget.setPointerCapture(e.pointerId);
		pickFrom(kind)(e);
	};

	const moveDrag = (kind: "area" | "hue") => (e: ReactPointerEvent) => {
		if (!dragging.current) return;
		pickFrom(kind)(e);
	};

	const endDrag = (e: ReactPointerEvent) => {
		if (!dragging.current) return;
		dragging.current = false;
		try {
			e.currentTarget.releasePointerCapture(e.pointerId);
		} catch {
		}
		onChange(hsvToHex(hsvRef.current));
	};

	return (
		<div className="color-picker" ref={rootRef}>
			<Button
				className="color-picker-trigger"
				icon={Palette}
				onClick={() => setOpen((o) => !o)}
			/>

			{open && (
				<div className="color-picker-popover">
					<div
						className="cp-area"
						ref={areaRef}
						style={{ background: `hsl(${hsv.h} 100% 50%)` }}
						onPointerDown={startDrag("area")}
						onPointerMove={moveDrag("area")}
						onPointerUp={endDrag}
						onPointerCancel={endDrag}
					>
						<span
							className="cp-thumb"
							style={{ left: `${hsv.s * 100}%`, top: `${(1 - hsv.v) * 100}%` }}
						/>
					</div>

					<div
						className="cp-hue"
						ref={hueRef}
						onPointerDown={startDrag("hue")}
						onPointerMove={moveDrag("hue")}
						onPointerUp={endDrag}
						onPointerCancel={endDrag}
					>
						<span
							className="cp-hue-thumb"
							style={{
								left: `${(hsv.h / 360) * 100}%`,
								background: `hsl(${hsv.h} 100% 50%)`,
							}}
						/>
					</div>

					<div className="color-picker-swatches">
						{PRESETS.map((c) => (
							<button
								key={c}
								type="button"
								className="color-picker-swatch"
								style={{ background: c }}
								aria-label={c}
								onClick={() => onChange(c)}
							/>
						))}
					</div>

					<Button
						className="color-picker-theme"
						fill
						icon={theme === "dark" ? Sun : Moon}
						onClick={onToggleTheme}
					/>
				</div>
			)}
		</div>
	);
}
