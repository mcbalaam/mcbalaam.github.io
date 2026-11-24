import { getVanityConfig } from "../config";
import type { UserStatus } from "../requests";
import Picture from "./Picture";

export interface ProfileCardProps {
	userStatus: UserStatus | null;
	seed: string;
	theme: "dark" | "light";
	reactionCounts: Record<string, number>;
	userReactions: string[];
	onToggleLocale: () => void;
	onToggleTheme: () => void;
	onSeedChange: (seed: string) => void;
	onReactionClick: (reaction: string) => void;
	onFlip: () => void;
}

export function VanityOverlay({ vanityId }: { vanityId: string }) {
	const config = getVanityConfig(vanityId);
	if (!config) return null;
	// const style = {
	// 	position: "absolute" as const,
	// 	top: `calc(50% + ${config.y}px)`,
	// 	left: `calc(50% + ${config.x}px)`,
	// 	transform: `translate(-35%, -50%) rotate(${config.angle}deg)`,
	// 	width: "auto",
	// 	height: "auto",
	// 	maxWidth: "120px",
	// 	maxHeight: "120px",
	// 	pointerEvents: "none" as const,
	// 	zIndex: 3,
	// };
	return (
		<div className="vanity-overlay">
			<Picture alt="Vanity picture" avif={config.avif} webp={config.webp} />
		</div>
	);
}
