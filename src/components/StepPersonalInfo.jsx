// ─────────────────────────────────────────────────────────
// STEP 1 — Personal Info
//
// Props received from App (parent):
//   formData    → the shared state object (read from it)
//   updateField → function to write back to parent state
//   onNext      → called when validation passes
//
// KEY CONCEPT: inputs are "controlled components"
// value={formData.firstName} makes React own the input value
// onChange writes it back to the parent via updateField()
// ─────────────────────────────────────────────────────────

import { useFormValidation } from "../hooks/useFormValidation";

export default function StepPersonalInfo({ formData, updateField, onNext }) {
  const { errors, validate } = useFormValidation();

  const handleNext = () => {
    // Run all validations before proceeding
    const passed = validate({
      firstName: !formData.firstName.trim() ? "First name is required" : null,
      lastName:  !formData.lastName.trim()  ? "Last name is required"  : null,
      dob:       !formData.dob              ? "Date of birth is required" : null,
    });

    // Only go to next step if all fields are valid
    if (passed) onNext();
  };

  return (
    <div className="step">
      <h2 className="step-heading">Personal information</h2>
      <p className="step-description">Let's start with the basics.</p>

      <div className="field-row">
        {/* First Name */}
        <div className="field">
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            type="text"
            placeholder="Arjun"
            value={formData.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            className={errors.firstName ? "input-error" : ""}
          />
          {errors.firstName && <span className="error-msg">{errors.firstName}</span>}
        </div>

        {/* Last Name */}
        <div className="field">
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Sharma"
            value={formData.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            className={errors.lastName ? "input-error" : ""}
          />
          {errors.lastName && <span className="error-msg">{errors.lastName}</span>}
        </div>
      </div>

      {/* Date of Birth */}
      <div className="field">
        <label htmlFor="dob">Date of birth</label>
        <input
          id="dob"
          type="date"
          value={formData.dob}
          onChange={(e) => updateField("dob", e.target.value)}
          className={errors.dob ? "input-error" : ""}
        />
        {errors.dob && <span className="error-msg">{errors.dob}</span>}
      </div>

      {/* Navigation — no Back button on step 1 */}
      <div className="btn-row">
        {/* type="button" prevents default form submit/page refresh */}
        <button type="button" className="btn-primary" onClick={handleNext}>
          Next →
        </button>
      </div>
    </div>
  );
}
