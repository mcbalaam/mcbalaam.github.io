import React, { useState, useEffect } from "react";
import {
  signInWithGitHub,
  signOut,
  getCurrentSession,
  isAuthenticated,
} from "../../entry";
import "./styles.css";

import { t } from "translations/translate";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import github from "../../../media/github-tile.svg";

import Button from "../Button";

interface AuthButtonsProps {
  onAuthChange?: (isAuthenticated: boolean) => void;
  onLoginSuccess?: () => void;
  onLoginError?: (errorMessage: string) => void;
  onLogoutSuccess?: () => void;
  onLogoutError?: (errorMessage: string) => void;
  className?: string;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({
  onAuthChange,
  onLoginSuccess,
  onLoginError,
  onLogoutSuccess,
  onLogoutError,
  className,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const authenticated = await isAuthenticated();
      if (authenticated) {
        const session = await getCurrentSession();
        setUser(session);
        if (onAuthChange) {
          onAuthChange(true);
        }
      } else {
        setUser(null);
        if (onAuthChange) {
          onAuthChange(false);
        }
      }
    } catch (err) {
      console.error("Error checking auth status:", err);
      setUser(null);
      if (onAuthChange) {
        onAuthChange(false);
      }
    } finally {
      setAuthChecked(true);
    }
  };

  const handleGitHubLogin = async () => {
    setIsLoading(true);
    try {
      await signInWithGitHub();
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to sign in with GitHub";
      if (onLoginError) {
        onLoginError(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await signOut();
      setUser(null);
      if (onAuthChange) {
        onAuthChange(false);
      }
      if (onLogoutSuccess) {
        onLogoutSuccess();
      }
    } catch (err) {
      console.error("Logout failed:", err);
      const errorMessage =
        err instanceof Error ? err.message : t("logout_toastError");
      if (onLogoutError) {
        onLogoutError(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getUserDisplayName = () => {
    if (!user) return "";
    return user.github_username || "User";
  };

  if (!authChecked) {
    return <p>{t("auth")}</p>;
  }

  if (user) {
    return (
      <div className="user-info">
        <img src={user.github_avatar} className="user-avatar" />
        <div className="user-profile-stack">
          <p className="username">{getUserDisplayName()}</p>
          <p className="about">{t("authViaGitHub")}</p>
        </div>
        <Button
          className="logout"
          onClick={handleLogout}
          disabled={isLoading}
          faIcon={faRightFromBracket}
          style={{ minWidth: "43px" }}
        />
      </div>
    );
  }

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <Button
        onClick={handleGitHubLogin}
        contrast
        href={github}
        disabled={isLoading}
      >
        {isLoading ? "Connecting..." : t("loginWithGithub")}
      </Button>
      <p style={{ lineHeight: "40px" }}>{t("toLeaveSigns")}</p>
    </div>
  );
};

export default AuthButtons;
