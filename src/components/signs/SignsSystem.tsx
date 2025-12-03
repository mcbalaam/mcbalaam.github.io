import React, { useState, useEffect } from "react";
import AuthButtons from "./AuthButtons";
import SignForm from "./SignForm";
import SignList from "./SignList";
import { isAuthenticated } from "../../signHandling/entry";

interface SignsSystemProps {
  className?: string;
  showAdminPanel?: boolean;
}

const SignsSystem: React.FC<SignsSystemProps> = ({
  className,
  showAdminPanel = false,
}) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<"public" | "my" | "admin">("public");
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const authenticated = await isAuthenticated();
      setIsUserAuthenticated(authenticated);
    } catch (err) {
      console.error("Error checking auth status:", err);
    }
  };

  const handleAuthChange = (authenticated: boolean) => {
    setIsUserAuthenticated(authenticated);
  };

  const handleSignCreated = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  const handleTabChange = (tab: "public" | "my" | "admin") => {
    setActiveTab(tab);
  };

  return (
    <div className={`signs-system ${className || ""}`}>
      <div className="system-header">
        <h2 className="system-title">Signs System</h2>
        <p className="system-description">
          Leave your mark! Sign in to create a sign that will appear on this page.
          Signs can be anonymous or include your username.
        </p>
      </div>

      <div className="system-content">
        <div className="auth-section">
          <AuthButtons onAuthChange={handleAuthChange} />
        </div>

        {isUserAuthenticated && (
          <div className="sign-form-section">
            <SignForm onSignCreated={handleSignCreated} />
          </div>
        )}

        <div className="tabs-section">
          <div className="tabs-header">
            <button
              className={`tab-button ${activeTab === "public" ? "active" : ""}`}
              onClick={() => handleTabChange("public")}
            >
              Public Signs
            </button>
            {isUserAuthenticated && (
              <button
                className={`tab-button ${activeTab === "my" ? "active" : ""}`}
                onClick={() => handleTabChange("my")}
              >
                My Signs
              </button>
            )}
            {showAdminPanel && isUserAuthenticated && (
              <button
                className={`tab-button ${activeTab === "admin" ? "active" : ""}`}
                onClick={() => handleTabChange("admin")}
              >
                Admin Panel
              </button>
            )}
          </div>

          <div className="tabs-content">
            {activeTab === "public" && (
              <div className="tab-pane">
                <SignList
                  showUserSigns={false}
                  showAdminControls={false}
                  key={`public-${refreshTrigger}`}
                />
              </div>
            )}

            {activeTab === "my" && isUserAuthenticated && (
              <div className="tab-pane">
                <SignList
                  showUserSigns={true}
                  showAdminControls={false}
                  key={`my-${refreshTrigger}`}
                />
              </div>
            )}

            {activeTab === "admin" && showAdminPanel && isUserAuthenticated && (
              <div className="tab-pane">
                <div className="admin-notice">
                  <h3>Admin Panel</h3>
                  <p>
                    Full admin controls coming soon! Currently you can only delete signs.
                    Future features will include approving pending signs and removing comments.
                  </p>
                </div>
                <SignList
                  showUserSigns={false}
                  showAdminControls={true}
                  key={`admin-${refreshTrigger}`}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .signs-system {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          margin: 20px 0;
        }

        .system-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 24px;
          text-align: center;
        }

        .system-title {
          margin: 0 0 12px 0;
          font-size: 28px;
          font-weight: 700;
        }

        .system-description {
          margin: 0;
          font-size: 16px;
          opacity: 0.9;
          line-height: 1.5;
          max-width: 600px;
          margin: 0 auto;
        }

        .system-content {
          padding: 24px;
        }

        .auth-section {
          margin-bottom: 24px;
        }

        .sign-form-section {
          margin-bottom: 32px;
        }

        .tabs-section {
          border: 1px solid #e9ecef;
          border-radius: 8px;
          overflow: hidden;
        }

        .tabs-header {
          display: flex;
          background: #f8f9fa;
          border-bottom: 1px solid #e9ecef;
          overflow-x: auto;
        }

        .tab-button {
          flex: 1;
          min-width: 120px;
          padding: 16px 20px;
          background: none;
          border: none;
          font-size: 15px;
          font-weight: 600;
          color: #6c757d;
          cursor: pointer;
          transition: all 0.2s;
          text-align: center;
          white-space: nowrap;
        }

        .tab-button:hover:not(.active) {
          background-color: #e9ecef;
          color: #495057;
        }

        .tab-button.active {
          background-color: white;
          color: #007bff;
          border-bottom: 3px solid #007bff;
        }

        .tabs-content {
          background: white;
        }

        .tab-pane {
          padding: 24px;
          min-height: 200px;
        }

        .admin-notice {
          background: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 6px;
          padding: 16px;
          margin-bottom: 24px;
        }

        .admin-notice h3 {
          margin: 0 0 8px 0;
          color: #856404;
          font-size: 18px;
        }

        .admin-notice p {
          margin: 0;
          color: #856404;
          font-size: 14px;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .system-header {
            padding: 20px 16px;
          }

          .system-title {
            font-size: 24px;
          }

          .system-description {
            font-size: 14px;
          }

          .system-content {
            padding: 16px;
          }

          .tab-button {
            padding: 12px 16px;
            font-size: 14px;
            min-width: 100px;
          }

          .tab-pane {
            padding: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default SignsSystem;
