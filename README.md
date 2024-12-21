# Responsive Web Application

## Overview
This responsive web application allows users to:
- View their issued cards.
- Access card details, including transaction history, balance, and masked card information.
- Authenticate securely using Two-Factor Authentication (2FA) and session management.

The application is built with **React** and **TypeScript**, styled with **TailwindCSS**, and deployed on a scalable hosting platform such as Netlify or Vercel.

---

## Features

### 1. Authentication
- Secure login using email and password.
- 2FA for sensitive actions, such as accessing card details.
- Session management with automatic token expiration after 24 hours of inactivity.

### 2. Card Management
- View a list of user-associated cards with:
  - Masked card numbers (e.g., **** **** **** 2513).
  - Expiry dates (e.g., MM/YY).
  - Card statuses (e.g., Active, Blocked).
- Detailed view for individual cards:
  - Card balance.
  - Transaction history (filterable by date range).
  - Masked card details (e.g., number and CVV).

### 3. Responsive Design
- Optimized for all screen sizes: desktop, tablet, and mobile.
- Clean and modern UI for intuitive navigation.

---

## Tech Stack

### Frontend
- **React** with **TypeScript**
- **Redux Toolkit** for state management
- **React Router** for client-side routing
- **Axios** for API integration
- **Formik** and **Yup** for form validation

### Styling
- **TailwindCSS** for responsive and consistent UI design

### Deployment
- Deployed on **Netlify** or **Vercel** with CI/CD pipelines

---

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/               # Main pages (Login, Dashboard, CardDetails)
├── features/            # Redux slices and related logic
├── types/               # TypeScript interfaces and types
├── utils/               # Utility functions (e.g., API calls, helpers)
├── styles/              # Global and component-specific styles
├── App.tsx              # Main application entry point
├── main.tsx             # React DOM rendering
```

--
