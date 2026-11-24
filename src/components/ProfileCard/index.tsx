import { ArrowRight, ArrowUpRight, Languages, Mail, QrCode } from "lucide-react";
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

export default function ProfileCard({
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

	return (
		<Card>
			<div className="banner profile-card-front-banner">
				<Button
					className="language-button"
					icon={Languages}
					onClick={toggleLocale}
				/>

				<ColorPicker
					seed={seed}
					onChange={handleSeedChange}
					theme={theme}
					onToggleTheme={toggleTheme}
				/>
				<div className="avatar-container">
					<img className="pfp" src={pfp}></img>
					{userStatus?.vanity_id && (
						<VanityOverlay vanityId={userStatus.vanity_id} />
					)}
				</div>
				<StatusBubble>
					{(userStatus?.status || "\n").replace(/<br\s*\/?>/gi, "\n")}
				</StatusBubble>
			</div>
			<div className="name">
				<div className="nameplate">mcbalaam</div>
				<Badge small src={robust}>
					RBST
				</Badge>
			</div>
			<div className="pnouns">
				mcbalaam <ArrowRight size={14} /> эмсибалаам, балаам, макбаклак (he/him)
			</div>
			<p className="desc">{t("page.aboutMe")}</p>
			<div
				style={{
					display: "flex",
					height: "fit-content",
					flexWrap: "wrap",
					margin: "0px 5px 10px 0",
				}}
			>
				<p>
					{t("page.myMidniht")} <Timestamp ts="1764608400" />.{" "}
					{t("page.active")}
				</p>
			</div>

			<h1>{t("page.connections")}</h1>
			<div className="connections">
				<Badge href="https://www.github.com/mcbalaam" src={github}>
					GitHub <ArrowUpRight size={12} />
				</Badge>
				<Badge href="https://steamcommunity.com/id/mcbalaam/" src={steam}>
					Steam <ArrowUpRight size={12} />
				</Badge>
				<Badge href="https://soundcloud.com/mcbalaam" src={soundcloud}>
					SoundСloud <ArrowUpRight size={12} />
				</Badge>
				<Badge href="https://ko-fi.com/mcbalaam" src={kofi}>
					Ko-Fi <ArrowUpRight size={12} />
				</Badge>
				<Badge href="https://pay.cloudtips.ru/p/7ac675d4" src={cloudtips}>
					CloudTips <ArrowUpRight size={12} />
				</Badge>
			</div>
			<br></br>
			<div className="contact-buttons">
				<Button
					className="mail-button"
					color="secondary"
					onClick={() => (window.location.href = "mailto:mcbalaam@proton.me")}
					icon={Mail}
				>
					<span className="mail-button-labels">
						<span className="mail-button-label mail-button-label-default">
							{t("page.mailme")}
						</span>
						<span
							className="mail-button-label mail-button-label-hover"
							aria-hidden="true"
						>
							{t("page.mailmeHover")}
						</span>
					</span>
					<ArrowUpRight size={12} />
				</Button>
				<button
					type="button"
					className="fancy-button minimal primary profile-flip-trigger"
					aria-label={t("page.showProfileBack")}
					onClick={onFlip}
				>
					<QrCode className="button-img icon" size={20} aria-hidden="true" />
				</button>
			</div>
			<br></br>
			<div className="reactions">
				<Tooltip text=":pig2:">
					<Reaction
						count={reactionCounts["pig"] || 0}
						reacted={userReactions.includes("pig")}
						onClick={() => handleReactionClick("pig")}
					>
						🐖
					</Reaction>
				</Tooltip>
				<Tooltip text=":dash:">
					<Reaction
						count={reactionCounts["dash"] || 0}
						onClick={() => handleReactionClick("dash")}
						reacted={userReactions.includes("dash")}
					>
						💨
					</Reaction>
				</Tooltip>
				<Tooltip text=":heart:">
					<Reaction
						count={reactionCounts["heart"] || 0}
						onClick={() => handleReactionClick("heart")}
						reacted={userReactions.includes("heart")}
					>
						❤️
					</Reaction>
				</Tooltip>
				<Tooltip text=":broken_heart:">
					<Reaction
						count={reactionCounts["broken_heart"] || 0}
						onClick={() => handleReactionClick("broken_heart")}
						reacted={userReactions.includes("broken_heart")}
					>
						💔
					</Reaction>
				</Tooltip>
			</div>
		</Card>
	);
}
