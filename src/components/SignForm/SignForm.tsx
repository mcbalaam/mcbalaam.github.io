import React, { useState } from "react";
import { createSign } from "../../requests";
import type { SignFormData } from "../../requests";
import "./styles.css";

interface SignFormProps {
  onSignCreated?: () => void;
  onSignError?: (errorMessage: string) => void;
  className?: string;
}

import { useTranslator } from "translations/translate";

import Button from "../Button";

const SignForm: React.FC<SignFormProps> = ({
  onSignCreated,
  onSignError,
  className,
}) => {
  const t = useTranslator();
  const [message, setMessage] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setIsSubmitting(true);

    try {
      const formData: SignFormData = {
        message: message.trim() || undefined,
        is_anonymous: isAnonymous,
      };

      await createSign(formData);
      setSuccess(true);
      setMessage("");
      setIsAnonymous(false);

      if (onSignCreated) {
        onSignCreated();
      }
    } catch (err) {
      console.error("Sign creation error:", err);

      let errorMessage = "Failed to create sign";

      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (err && typeof err === "object") {
        // Handle Supabase error object
        if ("message" in err) {
          errorMessage = String(err.message);
        } else if ("details" in err) {
          errorMessage = String(err.details);
        } else if ("code" in err) {
          errorMessage = `Error code: ${err.code}`;
        }
      } else if (typeof err === "string") {
        errorMessage = err;
      }

      setError(errorMessage);
      if (onSignError) {
        onSignError(errorMessage);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`sign-form ${className || ""}`}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t("sign_placeholder")}
            rows={2}
            maxLength={100}
            disabled={isSubmitting}
          />
          <div className="char-counter">{message.length}/100</div>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
              disabled={isSubmitting}
            />
            <span>{t("sign_anonymous")}</span>
          </label>
          <p className="help-text">{t("sign_anonymousExplain")}</p>
        </div>

        {error && (
          <div className="error-message">
            <strong>Error:</strong> {error}
          </div>
        )}

        {success && (
          <div className="success-message">
            ✓ Sign submitted successfully! It will appear after approval.
          </div>
        )}

        <Button type="submit" disabled={isSubmitting} fill contrast>
          {isSubmitting ? t("sign_sending") : t("sign_sendAction")}
        </Button>
      </form>
    </div>
  );
};

export default SignForm;
