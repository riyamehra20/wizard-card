// ─────────────────────────────────────────────────────────
// SUCCESS SCREEN
//
// Shown after submit. Purely presentational.
// Receives the user's first name to personalise the message.
// ─────────────────────────────────────────────────────────

export default function SuccessScreen({ name }) {
  return (
    <div className="app-wrapper">
      <div className="wizard-card success-card">
        <div className="success-icon">✓</div>
        <h2 className="success-title">You're all set, {name}!</h2>
        <p className="success-subtitle">
          Your account has been created. Check your console for the submitted payload.
        </p>
      </div>
    </div>
  );
}
