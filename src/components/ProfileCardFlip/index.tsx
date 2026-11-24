import type { ComponentChildren, RefObject } from "preact";
import { useLayoutEffect, useRef, useState } from "preact/hooks";
import "./styles.css";

interface ProfileCardFlipProps {
	open: boolean;
	source: RefObject<HTMLDivElement>;
	onClose: () => void;
	front: () => ComponentChildren;
	back: () => ComponentChildren;
}

export default function ProfileCardFlip({ open, source, onClose, front, back }: ProfileCardFlipProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const frameRef = useRef<HTMLDivElement>(null);
	const motionRef = useRef<HTMLDivElement>(null);
	const backRef = useRef<HTMLDivElement>(null);
	const openingRef = useRef<Animation | null>(null);
	const [present, setPresent] = useState(false);
	const [interactive, setInteractive] = useState(false);

	useLayoutEffect(() => () => openingRef.current?.cancel(), []);

	useLayoutEffect(() => {
		const dialog = dialogRef.current;
		const frame = frameRef.current;
		const motion = motionRef.current;
		const card = source.current?.firstElementChild;
		if (!dialog || !frame || !motion || !card || (!open && !dialog.open)) return;

		const origin = card.getBoundingClientRect();
		const takingOff = !dialog.open;
		if (takingOff) {
			dialog.style.setProperty("--profile-width", `${origin.width}px`);
			dialog.showModal();
			dialog.scrollTop = 0;
			setPresent(true);
		}

		const destination = frame.getBoundingClientRect();
		const x = origin.x - destination.x + (origin.width - destination.width) / 2;
		const y = origin.y - destination.y + (origin.height - destination.height) / 2;
		const from = `translate(${x}px, ${y}px) scale(${origin.width / destination.width}) rotateY(0deg)`;
		motion.style.setProperty("--flight-origin", from);
		setInteractive(false);

		const opening = openingRef.current;
		let animations: Animation[];
		if (takingOff) {
			dialog.setAttribute("data-flight-active", "");
			if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				dialog.setAttribute("data-taking-off", "");
				dialog.setAttribute("data-centered", "");
				const animation = motion.animate(
					[{ transform: from }, { transform: "translate(0px, 0px) scale(1) rotateY(180deg)" }],
					{ duration: 640, easing: "cubic-bezier(0.25, 0.75, 0.25, 1)", fill: "both" },
				);
				openingRef.current = animation;
				animations = [animation];
			} else {
				dialog.setAttribute("data-centered", "");
				animations = [];
			}
		} else if (opening && !open) {
			opening.reverse();
			animations = [opening];
		} else {
			dialog.toggleAttribute("data-centered", open);
			animations = motion.getAnimations();
		}

		let cancelled = false;
		void Promise.allSettled(animations.map((animation) => animation.finished)).then(() => {
			if (cancelled) return;
			if (!open) {
				dialog.removeAttribute("data-flight-active");
				dialog.close();
				dialog.removeAttribute("data-centered");
				source.current?.querySelector<HTMLButtonElement>(".profile-flip-trigger")?.focus({ preventScroll: true });
				setPresent(false);
			}
			// The CSS transform holds the same endpoint once the opening animation is gone.
			openingRef.current?.cancel();
			openingRef.current = null;
			dialog.removeAttribute("data-taking-off");
			if (open) setInteractive(true);
		});
		return () => { cancelled = true; };
	}, [open, source]);

	useLayoutEffect(() => {
		if (open && interactive) {
			backRef.current?.querySelector<HTMLButtonElement>(".profile-flip-trigger")?.focus({ preventScroll: true });
		}
	}, [open, interactive]);

	return (
		<dialog
			ref={dialogRef}
			className="profile-flight"
			aria-label="mcbalaam"
			data-interactive={open && interactive ? "" : undefined}
			onCancel={(event) => {
				event.preventDefault();
				onClose();
			}}
		>
			{(open || present) && (
				<div className="profile-flight-stage">
					<div ref={frameRef} className="profile-flight-frame">
						<div ref={motionRef} className="profile-flight-motion">
							<div className="profile-flight-face" inert>{front()}</div>
							<div ref={backRef} className="profile-flight-face profile-flight-back" inert={!open || !interactive}>
								{back()}
							</div>
						</div>
					</div>
				</div>
			)}
		</dialog>
	);
}
