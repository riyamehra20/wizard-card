
export default function ProgressBar({ currentStep, totalSteps }) {
  return (
    <div className="progress-bar">
      {Array.from({ length: totalSteps }, (_, i) => {
        const stepNum = i + 1;
        const isDone   = stepNum < currentStep;
        const isActive = stepNum === currentStep;

        return (
          <div key={stepNum} className="progress-item">
            {/* Dot */}
            <div
              className={`progress-dot ${isDone ? "done" : ""} ${isActive ? "active" : ""}`}
            >
              {isDone ? "✓" : stepNum}
            </div>

            {/* Connector line (not after last dot) */}
            {stepNum < totalSteps && (
              <div className={`progress-line ${isDone ? "done" : ""}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
