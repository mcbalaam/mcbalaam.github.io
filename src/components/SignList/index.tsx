import { useEffect, useState } from "react";
import {
  getApprovedSigns,
  getUserSigns,
  deleteSign,
  getCurrentSession,
} from "../../entry";

import type { Sign } from "../../entry";
import "./styles.css";

import { t } from "translations/translate";
import Button from "../Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface SignListProps {
  showUserSigns?: boolean;
  showAdminControls?: boolean;
  className?: string;
  onLeaveSignClick?: () => void;
}

export default function SignList({
  showUserSigns = false,
  showAdminControls = false,
  className = "",
  onLeaveSignClick,
}: SignListProps = {}) {
  const [signs, setSigns] = useState<Sign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  useEffect(() => {
    loadSigns();
    loadCurrentUser();
  }, [showUserSigns]);

  const loadSigns = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = showUserSigns
        ? await getUserSigns()
        : await getApprovedSigns();
      setSigns(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load signs");
    } finally {
      setLoading(false);
    }
  };

  const loadCurrentUser = async () => {
    try {
      const user = await getCurrentSession();
      setCurrentUser(user);
    } catch (err) {
      console.error("Failed to load user session:", err);
    }
  };

  const handleDeleteSign = async (signId: number) => {
    if (!confirm("Are you sure you want to delete this sign?")) {
      return;
    }

    setDeletingId(signId);
    try {
      await deleteSign(signId);
      setSigns(signs.filter((sign) => sign.id !== signId));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to delete sign");
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getDisplayName = (sign: Sign) => {
    if (sign.is_anonymous) {
      return "Anonymous";
    }
    return sign.github_username || "User";
  };

  if (loading) {
    return <p>{t("fetchingSigns")}</p>;
  }

  if (error) {
    return (
      <div className={`sign-list ${className || ""}`}>
        <div className="error">
          <strong>Error:</strong> {error}
        </div>
        <style>{`
          .sign-list .error {
            background-color: #f8d7da;
            border: 1px solid #f5c6cb;
            color: #721c24;
            padding: 20px;
            border-radius: 4px;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className={`sign-list ${className}`}>
      {currentUser && onLeaveSignClick && (
        <div style={{ marginBottom: "20px" }}>
          <Button
            contrast
            faIcon={faPlus}
            onClick={onLeaveSignClick}
            style={{ width: "100%" }}
          >
            Leave a sign
          </Button>
        </div>
      )}

      {signs.length === 0 ? (
        <div style={{ padding: "auto" }}>
          <p>{t("sign_noneYet")}</p>
        </div>
      ) : (
        <div className="signs-container">
          {signs.map((sign) => {
            const isOwnSign = currentUser && sign.user_id === currentUser.id;
            const canDelete =
              isOwnSign || (showAdminControls && currentUser?.is_admin);

            return (
              <div key={sign.id} className="sign-card">
                <div className="sign-header">
                  <div className="sign-meta" style={{ display: "flex" }}>
                    <img
                      className="sign-pfp-miniature"
                      src={sign.github_avatar}
                    />
                    <span className="sign-author">
                      {getDisplayName(sign) == "Anonymous" ? (
                        <p>Anonymous</p>
                      ) : (
                        <a
                          href={`https://github.com/${encodeURIComponent(getDisplayName(sign))}`}
                        >
                          {getDisplayName(sign)}
                        </a>
                      )}
                    </span>
                    <span className="sign-date">
                      {formatDate(sign.created_at)}
                    </span>
                  </div>

                  {canDelete && (
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteSign(sign.id)}
                      disabled={deletingId === sign.id}
                      title={
                        isOwnSign ? "Delete your sign" : "Admin: Delete sign"
                      }
                    >
                      {deletingId === sign.id ? "Deleting..." : "×"}
                    </button>
                  )}
                </div>

                {sign.message && (
                  <div className="sign-message">{sign.message}</div>
                )}

                <div className="sign-footer">
                  {sign.is_anonymous && (
                    <span className="anonymous-badge">Anonymous</span>
                  )}
                  {!sign.approved && (
                    <span className="pending-badge">Pending Approval</span>
                  )}
                  {showAdminControls && currentUser?.is_admin && (
                    <span className="admin-info">
                      User ID: {sign.user_id?.substring(0, 8)}...
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
