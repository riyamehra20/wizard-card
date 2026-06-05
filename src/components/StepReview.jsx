// ─────────────────────────────────────────────────────────
// STEP 3 — Review & Submit
//
// Purely a display step — no inputs, no validation needed.
// Reads from formData and renders a summary.
// onSubmit triggers the console.log + success state in App.
// ─────────────────────────────────────────────────────────

export default function StepReview({ formData, onBack, onSubmit }) {
  return (
    <div className="step">
      <h2 className="step-heading">Review your details</h2>
      <p className="step-description">Everything look correct? Hit submit!</p>

      {/* Personal Info Summary */}
      <div className="review-section">
        <h3 className="review-section-title">Personal info</h3>
        <div className="review-grid">
          <ReviewRow label="First name"    value={formData.firstName} />
          <ReviewRow label="Last name"     value={formData.lastName} />
          <ReviewRow label="Date of birth" value={formData.dob} />
        </div>
      </div>

      {/* Account Details Summary */}
      <div className="review-section">
        <h3 className="review-section-title">Account</h3>
        <div className="review-grid">
          <ReviewRow label="Email"    value={formData.email} />
          <ReviewRow label="Password" value="••••••••" />
        </div>
      </div>

      <div className="btn-row">
        <button type="button" className="btn-secondary" onClick={onBack}>
          ← Back
        </button>
        <button type="button" className="btn-submit" onClick={onSubmit}>
          Submit ✓
        </button>
      </div>
    </div>
  );
}

// Small helper component to avoid repeating label/value markup
function ReviewRow({ label, value }) {
  return (
    <div className="review-row">
      <span className="review-label">{label}</span>
      <span className="review-value">{value}</span>
    </div>
  );
}
