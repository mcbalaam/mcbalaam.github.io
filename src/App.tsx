import { useState, useEffect, useRef } from "preact/hooks";
import { i18n, useT } from "./translate";
import { getStatus, type UserStatus } from "./requests";
import { ReactionManager } from "./requests";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { CircleCheck, CircleX } from "lucide-react";

import "@mcbalaam/razdor-ui/dist/index.css";

import react from "/react.webp";
import typescript from "/typescript.webp";
import docker from "/docker.webp";
import gatus from "/gatus.webp";
import ansible from "/vscode-ansible.webp";
import go from "/golang.webp";

import {
	ModalPopup,
	type ModalControl,
	useCreateToast,
	Card,
} from "@mcbalaam/razdor-ui";
import AuthButtons from "./components/AccountBar/AccountBar";
import SignList from "./components/SignList";
import SignForm from "./components/SignForm/SignForm";
import RepoTab from "./components/RepoTab";
import GitHubActivity from "./components/GitHubActivity";
import StackInfo from "./components/StackInfo";
import Balatro from "./components/Balatro";
import RssFeed from "./components/RssFeed";
import WebringBar from "./components/WebringBar";
import ProfileCard from "./components/ProfileCard";
import ProfileCardBack from "./components/ProfileCardBack";
import ProfileCardFlip from "./components/ProfileCardFlip";

function hexToHsl(hex: string): [number, number, number] {
	const h = hex.replace("#", "");
	const r = parseInt(h.slice(0, 2), 16) / 255;
	const g = parseInt(h.slice(2, 4), 16) / 255;
	const b = parseInt(h.slice(4, 6), 16) / 255;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const l = (max + min) / 2;
	const d = max - min;
	let hue = 0;
	let s = 0;
	if (d !== 0) {
		s = d / (1 - Math.abs(2 * l - 1));
		if (max === r) hue = ((g - b) / d) % 6;
		else if (max === g) hue = (b - r) / d + 2;
		else hue = (r - g) / d + 4;
		hue *= 60;
		if (hue < 0) hue += 360;
	}
	return [hue, s, l];
}

function hslToHex(h: number, s: number, l: number): string {
	const c = (1 - Math.abs(2 * l - 1)) * s;
	const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
	const m = l - c / 2;
	let r = 0;
	let g = 0;
	let b = 0;
	if (h < 60) [r, g, b] = [c, x, 0];
	else if (h < 120) [r, g, b] = [x, c, 0];
	else if (h < 180) [r, g, b] = [0, c, x];
	else if (h < 240) [r, g, b] = [0, x, c];
	else if (h < 300) [r, g, b] = [x, 0, c];
	else [r, g, b] = [c, 0, x];
	const to = (v: number) =>
		Math.round((v + m) * 255)
			.toString(16)
			.padStart(2, "0");
	return `#${to(r)}${to(g)}${to(b)}`;
}

function seedToBalatroColors(
	seed: string,
	theme: "dark" | "light",
): [string, string, string] {
	const [h] = hexToHsl(seed);
	const color1 = hslToHex(h, 0.24, 0.29);
	const color2 = hslToHex((h + 360 - 47) % 360, 0.24, 0.2);
	const color3 =
		theme === "light" ? hslToHex(h, 0.13, 0.44) : hslToHex(h, 0.22, 0.16);
	return [color1, color2, color3];
}

async function getVisitorToken(): Promise<string> {
	const fp = await FingerprintJS.load();
	const result = await fp.get();
	return result.visitorId;
}

type LayoutMode = "triple" | "double" | "single";

function getLayoutMode(): LayoutMode {
	if (typeof window === "undefined") return "triple";
	if (window.matchMedia("(max-width: 860px)").matches) return "single";
	if (window.matchMedia("(max-width: 1285px)").matches) return "double";
	return "triple";
}

function useLayoutMode(): LayoutMode {
	const [mode, setMode] = useState<LayoutMode>(getLayoutMode);

	useEffect(() => {
		const singleQuery = window.matchMedia("(max-width: 860px)");
		const doubleQuery = window.matchMedia("(max-width: 1285px)");
		const update = () => setMode(getLayoutMode());
		singleQuery.addEventListener("change", update);
		doubleQuery.addEventListener("change", update);
		update();
		return () => {
			singleQuery.removeEventListener("change", update);
			doubleQuery.removeEventListener("change", update);
		};
	}, []);

	return mode;
}

export function App() {
	const [locale, setLocale] = useState("en");
	const [theme, setTheme] = useState<"dark" | "light">("dark");
	const [seed, setSeed] = useState<string>("#5865f2");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isProfileFlipped, setProfileFlipped] = useState(false);
	const profileSlot = useRef<HTMLDivElement>(null);
	const { createSuccessToast, createErrorToast } = useCreateToast();
	const [signsRefreshKey, setSignsRefreshKey] = useState(0);
	const [userStatus, setUserStatus] = useState<UserStatus | null>(null);
	const [visitorToken, setVisitorToken] = useState<string | null>(null);
	const layout = useLayoutMode();
	const t = useT();

	useEffect(() => {
		i18n.setLocale(locale);
	}, [locale]);

	useEffect(() => {
		const initToken = async () => {
			const token = await getVisitorToken();
			setVisitorToken(token);
		};
		initToken();
	}, []);

	const [reactionCounts, setReactionCounts] = useState<Record<string, number>>(
		{},
	);
	const [userReactions, setUserReactions] = useState<string[]>([]);

	useEffect(() => {
		if (!visitorToken) return;

		const fetchReactions = async () => {
			try {
				const [counts, userActive] = await Promise.all([
					ReactionManager.getReactionCounts(),
					ReactionManager.getUserReactions(visitorToken),
				]);
				setReactionCounts(counts);
				setUserReactions(userActive);
			} catch (err) {
				console.error(err);
			}
		};
		fetchReactions();
	}, [visitorToken]);

	const handleReactionClick = async (type: string) => {
		if (!visitorToken) return;

		const isReacted = userReactions.includes(type);

		if (isReacted) {
			setUserReactions((prev) => prev.filter((t) => t !== type));
			setReactionCounts((prev) => ({
				...prev,
				[type]: Math.max(0, (prev[type] || 0) - 1),
			}));
		} else {
			setUserReactions((prev) => [...prev, type]);
			setReactionCounts((prev) => ({
				...prev,
				[type]: (prev[type] || 0) + 1,
			}));
		}

		try {
			if (isReacted) {
				await ReactionManager.removeReaction(type, visitorToken);
			} else {
				await ReactionManager.addReaction(type, visitorToken);
			}

			const [counts, userActive] = await Promise.all([
				ReactionManager.getReactionCounts(),
				ReactionManager.getUserReactions(visitorToken),
			]);
			setReactionCounts(counts);
			setUserReactions(userActive);
		} catch (error) {
			null;
		}
	};

	useEffect(() => {
		const loadStatus = async () => {
			try {
				const status = await getStatus();
				setUserStatus(status);
			} catch (error) {
				console.error("Failed to load status:", error);
				setUserStatus({
					status: "busy auracoding",
					vanity_id: null,
					updated_at: new Date().toISOString(),
				});
			}
		};
		loadStatus();
	}, []);

	useEffect(() => {
		const getCookie = (name: string): string | null => {
			const value = `; ${document.cookie}`;
			const parts = value.split(`; ${name}=`);
			if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
			return null;
		};

		const savedLocale = getCookie("locale");
		const savedTheme = getCookie("theme") as "dark" | "light" | null;

		let initialLocale = "en";
		if (savedLocale) {
			initialLocale = savedLocale;
		} else {
			const browserLang =
				navigator.language || navigator.languages?.[0] || "en";
			const prefersRu = browserLang.startsWith("ru");
			initialLocale = prefersRu ? "ru" : "en";
		}
		setLocale(initialLocale);

		let initialTheme: "dark" | "light" = "dark";
		if (savedTheme) {
			initialTheme = savedTheme;
		} else {
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches;
			initialTheme = prefersDark ? "dark" : "light";
		}
		setTheme(initialTheme);
		document.documentElement.setAttribute("data-theme", initialTheme);
		document.documentElement.style.setProperty("color-scheme", initialTheme);

		const savedSeed = getCookie("seed");
		if (savedSeed) {
			setSeed(savedSeed);
			document.documentElement.style.setProperty("--seed", savedSeed);
		}
	}, []);

	const toggleLocale = () => {
		setLocale((locale) => {
			const newLocale = locale === "en" ? "ru" : "en";
			document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
			return newLocale;
		});
	};

	const toggleTheme = () => {
		setTheme((theme) => {
			const newTheme = theme === "dark" ? "light" : "dark";
			document.documentElement.setAttribute("data-theme", newTheme);
			document.documentElement.style.setProperty("color-scheme", newTheme);
			document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;
			return newTheme;
		});
	};

	const handleSeedChange = (next: string) => {
		setSeed(next);
		document.documentElement.style.setProperty("--seed", next);
		document.cookie = `seed=${next}; path=/; max-age=31536000`;
	};

	const [balatro1, balatro2, balatro3] = seedToBalatroColors(seed, theme);

	const openModal = () => setIsModalOpen(true);

	const modalLeaveSign: ModalControl = {
		isOpen: isModalOpen,
		onClose: () => setIsModalOpen(false),
		closeOnOverlayClick: true,
		closeOnEscape: true,
		showCloseButton: true,
		title: t("sign.header"),
	};

	const handleSignFormSuccess = async () => {
		setIsModalOpen(false);
		createSuccessToast({
			children: t("sign.toastSent"),
			duration: 3000,
			position: "bottom-center",
			icon: CircleCheck,
		});
		setSignsRefreshKey((prev) => prev + 1);
	};

	const handleSignFormError = async (errorMessage: string) => {
		setIsModalOpen(false);
		createErrorToast({
			children: `${t("sign.error")}: ${errorMessage}`,
			position: "bottom-center",
			icon: CircleX,
		});
	};

	const handleSignDeleted = async () => {
		createSuccessToast({
			children: t("sign.toastDeleted"),
			duration: 3000,
			position: "bottom-center",
			icon: CircleCheck,
		});
		setSignsRefreshKey((prev) => prev + 1);
	};

	const handleSignDeleteError = async (errorMessage: string) => {
		createErrorToast({
			children: `${t("sign.toastDeleteError")}: ${errorMessage}`,
			position: "bottom-center",
			icon: CircleX,
		});
	};

	const handleLogoutSuccess = async () => {
		createSuccessToast({
			children: t("auth.logoutSuccess"),
			duration: 3000,
			position: "bottom-center",
			icon: CircleCheck,
		});
		setSignsRefreshKey((prev) => prev + 1);
	};

	const handleLogoutError = async (errorMessage: string) => {
		createErrorToast({
			children: `${t("auth.logoutError")}: ${errorMessage}`,
			position: "bottom-center",
			icon: CircleX,
		});
	};

	const handleLoginSuccess = async () => {
		createSuccessToast({
			children: t("auth.authViaGitHub"),
			duration: 3000,
			position: "bottom-center",
			icon: CircleCheck,
		});
		setSignsRefreshKey((prev) => prev + 1);
	};

	const handleLoginError = async (errorMessage: string) => {
		createErrorToast({
			children: `${t("sign.error")}: ${errorMessage}`,
			position: "bottom-center",
			icon: CircleX,
		});
	};

	const profileProps = {
		userStatus,
		seed,
		theme,
		reactionCounts,
		userReactions,
		onToggleLocale: toggleLocale,
		onToggleTheme: toggleTheme,
		onSeedChange: handleSeedChange,
		onReactionClick: handleReactionClick,
	};
	const openProfileBack = () => setProfileFlipped(true);
	const closeProfileBack = () => setProfileFlipped(false);
	const renderProfileFront = () => <ProfileCard {...profileProps} onFlip={openProfileBack} />;
	const profileCard = (
		<div className="profile-card-slot" ref={profileSlot}>
			{renderProfileFront()}
		</div>
	);

	const accountCard = (
		<Card>
			<AuthButtons
				onLoginSuccess={handleLoginSuccess}
				onLoginError={handleLoginError}
				onLogoutSuccess={handleLogoutSuccess}
				onLogoutError={handleLogoutError}
				onAuthChange={() => {}}
			/>
			<br></br>
			<SignList
				onLeaveSignClick={() => openModal()}
				onSignDeleted={handleSignDeleted}
				onSignDeleteError={handleSignDeleteError}
				refreshKey={signsRefreshKey}
			/>
		</Card>
	);

	const stackCard = (
		<Card title={t("page.myStack")}>
			<div style={{ display: "inline-flex", flexDirection: "column" }}>
				<StackInfo
					items={[
						{ src: go, label: "Go", description: t("stack.go") },
						{
							src: typescript,
							label: "TypeScript",
							description: t("stack.typescript"),
						},
						{ src: ansible, label: "Ansible", description: t("stack.ansible") },
						{
							src: gatus,
							label: "Monitoring",
							description: t("stack.monitoring"),
						},
						{ src: react, label: "ReactJS", description: t("stack.react") },
						{ src: docker, label: "Docker", description: t("stack.docker") },
					]}
				/>
			</div>
		</Card>
	);

	const workingCard = (
		<Card title={t("page.workingOn")}>
			<RepoTab showUsageArrows={layout !== "single"} />
		</Card>
	);

	const rssCard = <RssFeed locale={locale} />;

	const githubCard = (
		<Card>
			<GitHubActivity locale={locale} username="mcbalaam" />
		</Card>
	);

	const webringBar = <WebringBar />;

	return (
		<>
			<Balatro
				color1={balatro1}
				color2={balatro2}
				color3={balatro3}
				mouseInteraction={false}
			></Balatro>
			{layout === "triple" && (
				<div className="master-container is-triple" data-profile-flipped={isProfileFlipped || undefined}>
					{webringBar}
					<div className="column profile-column">
						{profileCard}
						{accountCard}
					</div>
					<div className="column projects-column">{workingCard}</div>
					<div className="column extra-column">
						{stackCard}
						{githubCard}
						{rssCard}
					</div>
				</div>
			)}
			{layout === "double" && (
				<div className="master-container is-double" data-profile-flipped={isProfileFlipped || undefined}>
					{webringBar}
					<div className="column primary-column">
						{profileCard}
						{accountCard}
						{githubCard}
					</div>
					<div className="column secondary-column">
						{stackCard}
						{workingCard}
						{rssCard}
					</div>
				</div>
			)}
			{layout === "single" && (
				<div className="master-container is-single" data-profile-flipped={isProfileFlipped || undefined}>
					{webringBar}
					<div className="column single-column">
						{profileCard}
						{accountCard}
						{stackCard}
						{workingCard}
						{rssCard}
						{githubCard}
					</div>
				</div>
			)}
			<ProfileCardFlip
				open={isProfileFlipped}
				source={profileSlot}
				onClose={closeProfileBack}
				front={renderProfileFront}
				back={() => <ProfileCardBack {...profileProps} onFlip={closeProfileBack} />}
			/>
			<ModalPopup control={modalLeaveSign}>
				<SignForm
					onSignCreated={handleSignFormSuccess}
					onSignError={handleSignFormError}
				/>
			</ModalPopup>
		</>
	);
}

export default App;
