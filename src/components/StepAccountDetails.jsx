// ─────────────────────────────────────────────────────────
// STEP 2 — Account Details
//
// Same pattern as Step 1 but also receives onBack.
// Validates email with regex, password length, and match.
// ─────────────────────────────────────────────────────────

import { useFormValidation } from "../hooks/useFormValidation";

// Regex: checks string has chars @ chars . chars
// ^ = start, $ = end, [^\s@]+ = one or more non-space/@ chars
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function StepAccountDetails({ formData, updateField, onNext, onBack }) {
  const { errors, validate } = useFormValidation();

  const handleNext = () => {
    const passed = validate({
      email: !EMAIL_REGEX.test(formData.email)
        ? "Enter a valid email address"
        : null,

      password: formData.password.length < 8
        ? "Password must be at least 8 characters"
        : null,

      confirmPassword: formData.password !== formData.confirmPassword
        ? "Passwords do not match"
        : null,
    });

    if (passed) onNext();
  };

  return (
    <div className="step">
      <h2 className="step-heading">Account details</h2>
      <p className="step-description">Set up your login credentials.</p>

      {/* Email */}
      <div className="field">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          placeholder="arjun@example.com"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <span className="error-msg">{errors.email}</span>}
      </div>

      {/* Password */}
      <div className="field">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Min. 8 characters"
          value={formData.password}
          onChange={(e) => updateField("password", e.target.value)}
          className={errors.password ? "input-error" : ""}
        />
        {errors.password && <span className="error-msg">{errors.password}</span>}
      </div>

      {/* Confirm Password */}
      <div className="field">
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Repeat your password"
          value={formData.confirmPassword}
          onChange={(e) => updateField("confirmPassword", e.target.value)}
          className={errors.confirmPassword ? "input-error" : ""}
        />
        {errors.confirmPassword && (
          <span className="error-msg">{errors.confirmPassword}</span>
        )}
      </div>

      <div className="btn-row">
        <button type="button" className="btn-secondary" onClick={onBack}>
          ← Back
        </button>
        <button type="button" className="btn-primary" onClick={handleNext}>
          Next →
        </button>
      </div>
    </div>
  );
}
