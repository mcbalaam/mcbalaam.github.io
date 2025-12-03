import React, { useState, useEffect } from "react";
import {
  signInWithGitHub,
  signOut,
  getCurrentSession,
  isAuthenticated,
} from "../../signHandling/entry";
import "./styles.css";

import github from "../../github-tile.svg";
import logout from "../../logout.svg";

import Button from "../Button";

interface AuthButtonsProps {
  onAuthChange?: (isAuthenticated: boolean) => void;
  className?: string;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({
  onAuthChange,
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
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("Error checking auth status:", err);
    } finally {
      setAuthChecked(true);
      if (onAuthChange) {
        onAuthChange(!!user);
      }
    }
  };

  const handleGitHubLogin = async () => {
    setIsLoading(true);
    try {
      await signInWithGitHub();
      // После успешного логина, Supabase перенаправит пользователя обратно
      // и страница перезагрузится, так что нам не нужно обновлять состояние здесь
    } catch (err) {
      console.error("GitHub login failed:", err);
      alert("Failed to sign in with GitHub. Please try again.");
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
    } catch (err) {
      console.error("Logout failed:", err);
      alert("Failed to sign out. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getUserDisplayName = () => {
    if (!user) return "";
    return user.github_username || user.telegram_id || user.email || "User";
  };

  if (!authChecked) {
    return <Button>Awaiting Supabase authentication...</Button>;
  }

  if (user) {
    return (
      <div className="user-info">
        <img src={user.github_avatar} className="user-avatar" />
        <div className="user-profile-stack">
          <p className="username">{getUserDisplayName()}</p>
          <p className="about">Authenticated via GitHub</p>
        </div>
        <Button onClick={handleLogout} disabled={isLoading}>
          {isLoading ? "Logging out..." : "Logout"}
        </Button>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button
        onClick={handleGitHubLogin}
        contrast
        href={github}
        disabled={isLoading}
      >
        {isLoading ? "Connecting..." : "Sign in with GitHub"}
      </Button>
      <p style={{ lineHeight: "34px" }}>to leave signs!</p>
    </div>
  );
};

export default AuthButtons;
