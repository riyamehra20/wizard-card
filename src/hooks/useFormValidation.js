// ─────────────────────────────────────────────────────────
// useFormValidation HOOK
//
// A custom hook that manages error state.
// Keeps validation logic OUT of the step components,
// making them cleaner and easier to read.
//
// Usage:
//   const { errors, validate, clearErrors } = useFormValidation()
// ─────────────────────────────────────────────────────────

import { useState } from "react";

export function useFormValidation() {
  const [errors, setErrors] = useState({});

  // validate receives a rules object:
  // { fieldName: "error message if invalid" | null }
  // null means the field passed — no error shown
  const validate = (rules) => {
    const newErrors = {};
    let isValid = true;

    Object.entries(rules).forEach(([field, message]) => {
      if (message) {
        // message is a string = validation failed
        newErrors[field] = message;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const clearErrors = () => setErrors({});

  return { errors, validate, clearErrors };
}
