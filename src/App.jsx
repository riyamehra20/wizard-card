import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import StepPersonalInfo from "./components/StepPersonalInfo";
import StepAccountDetails from "./components/StepAccountDetails";
import StepReview from "./components/StepReview";
import SuccessScreen from "./components/SuccessScreen";
import "./App.css";

// ─────────────────────────────────────────────────────────
// APP COMPONENT — the "Parent" that owns ALL state
//
// WHY here? Because all 3 steps need to READ and WRITE
// the same data. If each step had its own useState, data
// would be lost when you navigate away. Lifting state up
// to the parent keeps everything in one place.
// ─────────────────────────────────────────────────────────

const TOTAL_STEPS = 3;

export default function App() {
  // currentStep decides which step component to render
  const [currentStep, setCurrentStep] = useState(1);

  // formData holds the ENTIRE payload across all steps
  // One object, one source of truth
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // submitted controls whether to show the Success screen
  const [submitted, setSubmitted] = useState(false);

  // updateField: called by each step's input onChange
  // Spreads existing data and updates only the changed field
  // Example: updateField("firstName", "Arjun")
  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const goNext = () => setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const handleSubmit = () => {
    // Build final payload — don't send confirmPassword to backend
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      dob: formData.dob,
      email: formData.email,
      password: formData.password,
    };

    // Assignment requirement: log the finalized data object
    console.log("Registration payload:", payload);

    setSubmitted(true);
  };

  // ── RENDER ────────────────────────────────────────────
  if (submitted) {
    return <SuccessScreen name={formData.firstName} />;
  }

  return (
    <div className="app-wrapper">
      <div className="wizard-card">
        {/* Header */}
        <div className="wizard-header">
          <h1 className="wizard-title">Create account</h1>
          <p className="wizard-subtitle">Step {currentStep} of {TOTAL_STEPS}</p>
        </div>

        {/* Progress indicator */}
        <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />

        {/* Conditional rendering — only one step visible at a time */}
        {currentStep === 1 && (
          <StepPersonalInfo
            formData={formData}
            updateField={updateField}
            onNext={goNext}
          />
        )}

        {currentStep === 2 && (
          <StepAccountDetails
            formData={formData}
            updateField={updateField}
            onNext={goNext}
            onBack={goBack}
          />
        )}

        {currentStep === 3 && (
          <StepReview
            formData={formData}
            onBack={goBack}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}
