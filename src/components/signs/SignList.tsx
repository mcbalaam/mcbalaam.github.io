import React, { useEffect, useState } from "react";
import { Sign, getApprovedSigns, getUserSigns, deleteSign, getCurrentSession } from "../../signHandling/entry";

interface SignListProps {
  showUserSigns?: boolean;
  showAdminControls?: boolean;
  className?: string;
}

const SignList: React.FC<SignListProps> = ({
  showUserSigns = false,
  showAdminControls = false,
  className
}) => {
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
      setSigns(signs.filter(sign => sign.id !== signId));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to delete sign");
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getDisplayName = (sign: Sign) => {
    if (sign.is_anonymous) {
      return "Anonymous";
    }
    return sign.github_username || sign.telegram_id || "User";
  };

  if (loading) {
    return (
      <div className={`sign-list ${className || ""}`}>
        <div className="loading">Loading signs...</div>
        <style>{`
          .sign-list .loading {
            text-align: center;
            padding: 40px;
            color: #6c757d;
            font-style: italic;
          }
        `}</style>
      </div>
    );
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

  if (signs.length === 0) {
    return (
      <div className={`sign-list ${className || ""}`}>
        <div className="empty-state">
          {showUserSigns
            ? "You haven't created any signs yet."
            : "No signs yet. Be the first to leave one!"}
        </div>
        <style>{`
          .sign-list .empty-state {
            text-align: center;
            padding: 40px;
            color: #6c757d;
            font-style: italic;
            background: #f8f9fa;
            border-radius: 8px;
            border: 1px dashed #dee2e6;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className={`sign-list ${className || ""}`}>
      <div className="signs-container">
        {signs.map((sign) => {
          const isOwnSign = currentUser && sign.user_id === currentUser.id;
          const canDelete = isOwnSign || (showAdminControls && currentUser?.is_admin);

          return (
            <div key={sign.id} className="sign-card">
              <div className="sign-header">
                <div className="sign-meta">
                  <span className="sign-author">{getDisplayName(sign)}</span>
                  <span className="sign-date">{formatDate(sign.created_at)}</span>
                </div>

                {canDelete && (
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteSign(sign.id)}
                    disabled={deletingId === sign.id}
                    title={isOwnSign ? "Delete your sign" : "Admin: Delete sign"}
                  >
                    {deletingId === sign.id ? "Deleting..." : "×"}
                  </button>
                )}
              </div>

              {sign.message && (
                <div className="sign-message">
                  {sign.message}
                </div>
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

      <style>{`
        .sign-list {
          width: 100%;
        }

        .signs-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .sign-card {
          background: white;
          border-radius: 8px;
          padding: 20px;
          border: 1px solid #dee2e6;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          transition: box-shadow 0.2s;
        }

        .sign-card:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .sign-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .sign-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sign-author {
          font-weight: 600;
          color: #333;
          font-size: 16px;
        }

        .sign-date {
          font-size: 12px;
          color: #6c757d;
        }

        .delete-button {
          background: none;
          border: none;
          color: #dc3545;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 4px;
          line-height: 1;
          transition: background-color 0.2s;
        }

        .delete-button:hover:not(:disabled) {
          background-color: #f8d7da;
        }

        .delete-button:disabled {
          color: #6c757d;
          cursor: not-allowed;
        }

        .sign-message {
          margin: 12px 0;
          padding: 12px;
          background: #f8f9fa;
          border-radius: 4px;
          border-left: 3px solid #007bff;
          font-size: 14px;
          line-height: 1.5;
          white-space: pre-wrap;
        }

        .sign-footer {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          align-items: center;
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid #e9ecef;
        }

        .anonymous-badge {
          background-color: #6c757d;
          color: white;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
        }

        .pending-badge {
          background-color: #ffc107;
          color: #212529;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
        }

        .admin-info {
          font-size: 11px;
          color: #6c757d;
          font-family: monospace;
          margin-left: auto;
        }
      `}</style>
    </div>
  );
};

export default SignList;
