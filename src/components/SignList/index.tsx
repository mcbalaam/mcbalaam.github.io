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
import ModalPopup, { type ModalControl } from "../ModalPopup";
import { faHashtag, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import Tooltip from "../Tooltip";

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signToDelete, setSignToDelete] = useState<number | null>(null);

  const [isHashModalOpen, setIsHashModalOpen] = useState(false);

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

  const handleDeleteClick = (signId: number) => {
    setSignToDelete(signId);
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!signToDelete) return;

    setDeletingId(signToDelete);
    try {
      await deleteSign(signToDelete);
      setSigns(signs.filter((sign) => sign.id !== signToDelete));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to delete sign");
    } finally {
      setDeletingId(null);
      setSignToDelete(null);
      setIsModalOpen(false);
    }
  };

  const handleDeleteCancel = () => {
    setSignToDelete(null);
    setIsModalOpen(false);
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
                    <Button
                      className="delete-button"
                      onClick={() => handleDeleteClick(sign.id)}
                      disabled={deletingId === sign.id}
                      faIcon={faTrashCan}
                    />
                  )}

                  <Tooltip text="This sign's hash matched!">
                    <Button
                      className="hash-button"
                      onClick={() => setIsHashModalOpen(true)}
                      faIcon={faHashtag}
                    />
                  </Tooltip>
                </div>

                {sign.message && (
                  <div className="sign-message">{sign.message}</div>
                )}

                {(sign.is_anonymous ||
                  !sign.approved ||
                  (showAdminControls && currentUser?.is_admin)) && (
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
                )}
              </div>
            );
          })}
        </div>
      )}

      <ModalPopup
        control={{
          isOpen: isModalOpen,
          onClose: handleDeleteCancel,
          closeOnOverlayClick: true,
          closeOnEscape: true,
          showCloseButton: true,
          title: "Delete your sign?",
          footerButtons: (
            <>
              <Button onClick={handleDeleteCancel}>Leave</Button>
              <Button primary onClick={handleDeleteConfirm}>
                Delete
              </Button>
            </>
          ),
        }}
      >
        <p>Are you sure you want to delete this sign?</p>
      </ModalPopup>

      <ModalPopup
        control={{
          isOpen: isHashModalOpen,
          onClose: () => {
            setIsHashModalOpen(false);
          },
          closeOnOverlayClick: true,
          closeOnEscape: true,
          showCloseButton: true,
          title: "What are hashes?",
        }}
      >
        <p>
          Hashing is a technique of generating unique text strings based on some
          data. The method used ensures identical input data results in
          identical output.
        </p>
        <br />
        <p>
          This sign's hash matched the one that was generated when it was just
          created — that means it wasn't modified!
        </p>
      </ModalPopup>
    </div>
  );
}
