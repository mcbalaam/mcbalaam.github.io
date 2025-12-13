import { useEffect, useState } from "react";
import {
  getApprovedSigns,
  getUserSigns,
  deleteSign,
  getCurrentSession,
  canUserCreateSign,
} from "../../requests";

import type { Sign, SignWithVerification } from "../../requests";
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
  onSignDeleted?: () => void;
  onSignDeleteError?: (errorMessage: string) => void;
  refreshKey?: number;
}

export default function SignList({
  showUserSigns = false,
  showAdminControls = false,
  className = "",
  onLeaveSignClick,
  onSignDeleted,
  onSignDeleteError,
  refreshKey = 0,
}: SignListProps) {
  const [signs, setSigns] = useState<SignWithVerification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [canCreateSign, setCanCreateSign] = useState<boolean>(true);
  const [canCreateReason, setCanCreateReason] = useState<string>("");
  const [checkingPermissions, setCheckingPermissions] = useState<boolean>(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signToDelete, setSignToDelete] = useState<number | null>(null);

  const [isHashModalOpen, setIsHashModalOpen] = useState(false);
  const [selectedSign, setSelectedSign] = useState<SignWithVerification | null>(
    null,
  );

  useEffect(() => {
    loadSigns();
    loadCurrentUser();
    checkCanCreateSign();
  }, [showUserSigns, refreshKey]);

  useEffect(() => {
    if (currentUser) {
      checkCanCreateSign();
    }
  }, [currentUser, refreshKey]);

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

  const checkCanCreateSign = async () => {
    setCheckingPermissions(true);
    try {
      const { canCreate, reason } = await canUserCreateSign();
      setCanCreateSign(canCreate);
      setCanCreateReason(reason || "");
    } catch (err) {
      console.error("Failed to check sign creation permission:", err);
      setCanCreateSign(false);
      setCanCreateReason("Error checking permissions");
    } finally {
      setCheckingPermissions(false);
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
      if (onSignDeleted) {
        onSignDeleted();
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : t("sign_toastDeleteError");
      if (onSignDeleteError) {
        onSignDeleteError(errorMessage);
      }
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
            fill
            disabled={checkingPermissions || !canCreateSign}
          >
            {checkingPermissions
              ? "Loading..."
              : canCreateSign
                ? t("sign_header")
                : canCreateReason}
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

                  <Tooltip
                    className="mobile-check"
                    text={
                      sign.signatureValid
                        ? t("sign_hashMatched")
                        : t("sign_hashMismatch")
                    }
                  >
                    <Button
                      className={`hash-button ${sign.signatureValid ? "" : "hash-mismatch"}`}
                      onClick={() => {
                        setSelectedSign(sign);
                        setIsHashModalOpen(true);
                      }}
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
          title: t("sign_deleteTitle"),
          footerButtons: (
            <>
              <Button onClick={handleDeleteCancel}>
                {t("sign_deleteCancel")}
              </Button>
              <Button contrast onClick={handleDeleteConfirm}>
                {t("sign_deleteConfirm")}
              </Button>
            </>
          ),
        }}
      >
        <p>{t("sign_deleteText")}</p>
      </ModalPopup>

      <ModalPopup
        control={{
          isOpen: isHashModalOpen,
          onClose: () => {
            setIsHashModalOpen(false);
            setSelectedSign(null);
          },
          closeOnOverlayClick: true,
          closeOnEscape: true,
          showCloseButton: true,
          title: selectedSign?.signatureValid
            ? t("hashes_title")
            : t("hashes_mismatchTitle"),
        }}
      >
        {selectedSign && (
          <>
            <p>
              {selectedSign.signatureValid
                ? t("hashes_about")
                : t("hashes_mismatchAbout")}
              <br />
              <br />
            </p>
            <p>{selectedSign.signatureValid && t("hashes_matched")}</p>

            {selectedSign.publicKeyDisplay && (
              <>
                <br />
                <p className="public-key">
                  {selectedSign.publicKeyDisplay}****************
                </p>
              </>
            )}
            {selectedSign.verificationError && (
              <p>
                <strong>{t("hashes_error")}:</strong>{" "}
                {selectedSign.verificationError}
              </p>
            )}
          </>
        )}
      </ModalPopup>
    </div>
  );
}
