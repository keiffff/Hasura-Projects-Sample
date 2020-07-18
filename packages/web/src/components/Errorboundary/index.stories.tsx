import React, { useState } from 'react';
import { ErrorBoundary } from '.';

export default {
  component: ErrorBoundary,
  title: 'ErrorBoundary',
};

export const basic = () => (
  <ErrorBoundary>
    <ErrorSimulateButton />
  </ErrorBoundary>
);

const ErrorSimulateButton = () => {
  const [error, setError] = useState<Error | null>(null);

  if (error) {
    throw error;
  }

  return (
    <button type="button" onClick={() => setError(new Error('something went wrong'))}>
      click to show error boundary
    </button>
  );
};
