import React, { useState } from "react";
import { createSign } from "../../entry";
import type { SignFormData } from "../../entry";
import "./styles.css";

interface SignFormProps {
  onSignCreated?: () => void;
  className?: string;
}

import { useTranslator } from "translations/translate";

import Button from "../Button";

const SignForm: React.FC<SignFormProps> = ({ onSignCreated, className }) => {
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
      setError(err instanceof Error ? err.message : "Failed to create sign");
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

        <Button
          type="submit"
          disabled={isSubmitting}
          style={{ width: "100%" }}
          contrast
        >
          {isSubmitting ? t("sign_sending") : t("sign_sendAction")}
        </Button>
      </form>
    </div>
  );
};

export default SignForm;
