import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'providers/Auth';
import { environment } from 'constants/environment';
import { Routes } from 'routes';
import { ErrorBoundary } from 'components/Errorboundary';
import { LoadingScreen } from 'components/LoadingScreen';

export const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Suspense fallback={<LoadingScreen />}>
        <AuthProvider
          domain={environment.authDomain}
          client_id={environment.authClientId}
          redirect_uri={window.location.origin}
          audience={environment.authAudience}
        >
          <Routes />
        </AuthProvider>
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
);
