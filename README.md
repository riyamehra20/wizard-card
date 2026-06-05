#  Registration Wizard

A multi-step onboarding form built with React, designed for SaaS and FinTech applications. This project demonstrates advanced state management, controlled components, and clean UI architecture.

---

##  Live Demo

> Hosted on Vercel: [https://wizard-card.vercel.app/](https://wizard-card.vercel.app/)

---

##  Features

-  3-step wizard form with smooth navigation
-  Persistent state across all steps (data never lost on Back)
-  Real-time form validation with error messages
-  Email format validation using Regex
-  Password match confirmation
-  Review & Submit screen with full data summary
-  Success screen after submission
-  Fully responsive (mobile + desktop)
-  Professional Navy Blue UI theme

---

##  Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI library |
| useState Hook | State management |
| CSS3 | Styling & animations |
| Create React App | Project setup |

---

## Project Structure

```
wizard-task/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ProgressBar.jsx       # Step progress indicator
│   │   ├── StepPersonalInfo.jsx  # Step 1 - Name & DOB
│   │   ├── StepAccountDetails.jsx # Step 2 - Email & Password
│   │   ├── StepReview.jsx        # Step 3 - Review & Submit
│   │   └── SuccessScreen.jsx     # Post-submit success UI
│   ├── hooks/
│   │   └── useFormValidation.js  # Custom validation hook
│   ├── App.jsx                   # Parent component (lifted state)
│   ├── App.css                   # Global styles
│   └── index.js                  # React entry point
├── package.json
└── README.md
```

---

##  Getting Started

### Prerequisites
- Node.js (v16 or above)
- npm

### Installation

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000`



##  Key Concepts Used

### State Lifting
All form data lives in the parent `App.jsx` component. Each step receives `formData` and `updateField` as props, ensuring data persists when navigating between steps.

### Controlled Components
Every input has `value={formData.fieldName}` and `onChange` wired to `updateField()`, making React the single source of truth.

### Custom Hook
`useFormValidation.js` manages error state separately from component logic, keeping step components clean and readable.

### Regex Validation
Email is validated using `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` — a standard pattern checking for valid email format.



## Build for Production

```bash
npm run build

This creates an optimized `build/` folder ready for deployment.


##  Deployment

This project is deployed on **Vercel**. Every push to `main` triggers an automatic redeployment.
