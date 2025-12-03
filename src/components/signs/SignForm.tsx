import React, { useState } from "react";
import { createSign, SignFormData } from "../../signHandling/entry";

interface SignFormProps {
  onSignCreated?: () => void;
  className?: string;
}

const SignForm: React.FC<SignFormProps> = ({ onSignCreated, className }) => {
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
      <h3>Leave a Sign</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="message">Message (optional):</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            rows={4}
            maxLength={500}
            disabled={isSubmitting}
          />
          <div className="char-counter">{message.length}/500</div>
        </div>

        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
              disabled={isSubmitting}
            />
            <span>Post anonymously</span>
          </label>
          <p className="help-text">
            If checked, your username won't be displayed with the sign
          </p>
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

        <button
          type="submit"
          disabled={isSubmitting}
          className="submit-button"
        >
          {isSubmitting ? "Submitting..." : "Submit Sign"}
        </button>
      </form>

      <style>{`
        .sign-form {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
          border: 1px solid #dee2e6;
        }

        .sign-form h3 {
          margin-top: 0;
          margin-bottom: 20px;
          color: #333;
          font-size: 1.5rem;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #495057;
        }

        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-family: inherit;
          font-size: 14px;
          resize: vertical;
          box-sizing: border-box;
        }

        .form-group textarea:focus {
          outline: none;
          border-color: #80bdff;
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }

        .form-group textarea:disabled {
          background-color: #e9ecef;
          cursor: not-allowed;
        }

        .char-counter {
          text-align: right;
          font-size: 12px;
          color: #6c757d;
          margin-top: 4px;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-weight: normal;
        }

        .checkbox-label input[type="checkbox"] {
          margin: 0;
          cursor: pointer;
        }

        .help-text {
          margin: 8px 0 0 0;
          font-size: 12px;
          color: #6c757d;
        }

        .error-message {
          background-color: #f8d7da;
          border: 1px solid #f5c6cb;
          color: #721c24;
          padding: 12px;
          border-radius: 4px;
          margin-bottom: 20px;
          font-size: 14px;
        }

        .success-message {
          background-color: #d4edda;
          border: 1px solid #c3e6cb;
          color: #155724;
          padding: 12px;
          border-radius: 4px;
          margin-bottom: 20px;
          font-size: 14px;
        }

        .submit-button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
          width: 100%;
        }

        .submit-button:hover:not(:disabled) {
          background-color: #0056b3;
        }

        .submit-button:disabled {
          background-color: #6c757d;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default SignForm;
