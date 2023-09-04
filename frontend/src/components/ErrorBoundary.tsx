import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-red-600 text-2xl font-bold">Something went wrong</p>
      </div>
    </div>
  );
}

export default ErrorBoundary;
