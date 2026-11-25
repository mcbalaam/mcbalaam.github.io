import { useEffect, useRef } from "preact/hooks";
import {
	X,
	QrCode,
} from "lucide-react";
import { Badge, Button, Card, Timestamp, Tooltip } from "@mcbalaam/razdor-ui";
import { useT } from "../../translate";
import ColorPicker from "../ColorPicker";
import Reaction from "../Reaction";
import StatusBubble from "../StatusBubble";
import { VanityOverlay, type ProfileCardProps } from "../profileCardShared";
import github from "/github-tile.svg";
import steam from "/steampowered-tile.svg";
import robust from "/robust.webp";
import soundcloud from "/soundcloud.webp";
import kofi from "/kofi.webp";
import cloudtips from "/cloudtips.png";
import pfp from "/mcbalaam.webp";
import "./styles.css";
import { QrcodeSVG } from "react-qrcode-pretty";

export default function ProfileCardBack({
	userStatus,
	seed,
	theme,
	reactionCounts,
	userReactions,
	onToggleLocale: toggleLocale,
	onToggleTheme: toggleTheme,
	onSeedChange: handleSeedChange,
	onReactionClick: handleReactionClick,
	onFlip,
}: ProfileCardProps) {
	const t = useT();
	const banner = useRef<HTMLDivElement>(null);
	const multLabel = useRef<HTMLDivElement>(null);
	const multDiamond = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const card = banner.current?.closest<HTMLElement>(".card");
		const face = card?.parentElement;
		if (!card || !face) return;

		const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
		const hit = new Audio("/multhit1.ogg");
		hit.preservesPitch = false;
		let swing: Animation | undefined;
		let multAnimation: Animation | undefined;
		let diamondAnimation: Animation | undefined;
		let frame: number | undefined;
		let bounds: DOMRect | undefined;
		let clientX = 0;
		let clientY = 0;

		const invalidateBounds = () => { bounds = undefined; };
		const resizeObserver = new ResizeObserver(invalidateBounds);
		resizeObserver.observe(face);
		window.addEventListener("resize", invalidateBounds);
		window.addEventListener("scroll", invalidateBounds, { capture: true, passive: true });

		const applyTilt = () => {
			frame = undefined;
			// Measure the un-tilted face so the card never changes its own input.
			const { left, top, width, height } = bounds ??= face.getBoundingClientRect();
			const x = Math.max(-1, Math.min(1, (clientX - left) / width * 2 - 1));
			const y = Math.max(-1, Math.min(1, (clientY - top) / height * 2 - 1));
			card.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) scale(1.05)`;
		};
		const tilt = (event: PointerEvent) => {
			if (event.pointerType !== "mouse" || motionPreference.matches) return;
			clientX = event.clientX;
			clientY = event.clientY;
			frame ??= requestAnimationFrame(applyTilt);
		};
		const resetTilt = () => {
			if (frame !== undefined) cancelAnimationFrame(frame);
			frame = undefined;
			bounds = undefined;
			card.style.removeProperty("transform");
		};
		const onMotionPreferenceChange = () => {
			if (!motionPreference.matches) return;
			swing?.cancel();
			resetTilt();
		};
		const onCardClick = (event: MouseEvent) => {
			if (!(event.target instanceof Element) || event.target.closest("button, a, input, select, textarea, [contenteditable], [role=button]")) return;

			hit.currentTime = 0;
			hit.playbackRate = Math.min(3, hit.playbackRate * 1.02);
			void hit.play().catch(() => {}); // The browser may block audio playback.

			const reducedMotion = motionPreference.matches;
			multAnimation?.cancel();
			diamondAnimation?.cancel();
			multAnimation = multLabel.current?.animate(
				reducedMotion
					? [{ opacity: 0 }, { opacity: 1, offset: 0.15 }, { opacity: 1, offset: 0.6 }, { opacity: 0 }]
					: [
						{ opacity: 0, transform: "translateY(-8px) rotate(-9deg) scale(.75)", easing: "ease-out" },
						{ opacity: 1, transform: "translateY(0) rotate(6deg) scale(1.08)", offset: 0.2, easing: "ease-in-out" },
						{ opacity: 1, transform: "translateY(3px) rotate(-3deg) scale(1)", offset: 0.45, easing: "ease-out" },
						{ opacity: 1, transform: "translateY(6px) rotate(2deg) scale(1)", offset: 0.65, easing: "ease-in" },
						{ opacity: 0, transform: "translateY(14px) rotate(0deg) scale(.95)" },
					],
				{ duration: 600 },
			);
			if (!reducedMotion) {
				diamondAnimation = multDiamond.current?.animate(
					[
						{ rotate: "45deg", scale: "0.1", easing: "ease-out" },
						{ scale: "1", offset: 0.2 },
						{ rotate: "135deg", scale: "1" },
					],
					{ duration: 600 },
				);
			}
			if (reducedMotion) return;

			const start = swing?.playState === "running" ? getComputedStyle(card).rotate : "0deg";
			swing?.cancel();
			swing = card.animate(
				[
					{ rotate: "-3deg", easing: "ease-out" },
					{ scale: "0.9", },
					{ rotate: "15deg", offset: 0.4, easing: "ease-in", },
					{ rotate: "-3deg", offset: 0.8, easing: "ease-out" },
					{ rotate: "0deg" },
				],
				{ duration: 210 },
			);
		};

		face.addEventListener("pointermove", tilt);
		face.addEventListener("pointerleave", resetTilt);
		card.addEventListener("click", onCardClick);
		motionPreference.addEventListener("change", onMotionPreferenceChange);
		return () => {
			face.removeEventListener("pointermove", tilt);
			face.removeEventListener("pointerleave", resetTilt);
			card.removeEventListener("click", onCardClick);
			motionPreference.removeEventListener("change", onMotionPreferenceChange);
			window.removeEventListener("scroll", invalidateBounds, true);
			window.removeEventListener("resize", invalidateBounds);
			resizeObserver.disconnect();
			swing?.cancel();
			multAnimation?.cancel();
			diamondAnimation?.cancel();
			hit.pause();
			resetTilt();
		};
	}, []);

	return (
		<Card>
			<div ref={banner} className="banner profile-card-back-banner">
				<button
					type="button"
					className="fancy-button primary profile-flip-trigger"
					aria-label={t("page.showProfileFront")}
					onClick={onFlip}
				>
					<X className="button-img icon" size={20} aria-hidden="true" />
				</button>
				<div className="avatar-container">
					<img className="pfp" src={pfp}></img>
					{/*{userStatus?.vanity_id && (
						<VanityOverlay vanityId={userStatus.vanity_id} />
					)}*/}
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							marginTop: '-12px'
						}}
					>
						<div className="nameplate">mcbalaam</div>
						<div className="pnouns">fullstack && dev ops</div>
						<div className="pnouns">react, go, kuber</div>
					</div>
				</div>

			</div>
			<QrcodeSVG
				internalProps={{ className: "profile-qr" }}
				value="https://mcblm.xyz"
				variant={{
					eyes: "circle",
					body: "fluid",
				}}
				color={{
					eyes: "var(--profile-qr-ink)",
					body: "var(--profile-qr-ink)",
				}}
				colorEffect={{
					eyes: "none",
					body: "none",
				}}
				padding={13}
				margin={20}
				size={400}
				bgColor="var(--profile-qr-paper)"
				bgRounded
				level="L"
			/>
			<br></br>
			<div ref={multLabel} className="profile-mult" aria-hidden="true">
				<span ref={multDiamond} className="profile-mult-diamond" />
				<span>+4 Mult</span>
			</div>
		</Card>
	);
}
