// src/components/ErrorBoundary.jsx
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service (e.g., Sentry, LogRocket).
    console.error("Error caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error occurs.
      return (
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-2xl font-bold text-red-500">
            Something went wrong. Please try again later.
          </h1>
        </div>
      );
    }

    // Render children if there's no error.
    return this.props.children;
  }
}

export default ErrorBoundary;