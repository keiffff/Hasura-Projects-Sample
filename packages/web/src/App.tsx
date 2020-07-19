import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'providers/Auth';
import { auth0Config } from 'variants/authConfig';
import { Routes } from 'routes';
import { ErrorBoundary } from 'components/Errorboundary';
import { LoadingScreen } from 'components/LoadingScreen';

export const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Suspense fallback={<LoadingScreen />}>
        <AuthProvider
          domain={auth0Config.domain}
          client_id={auth0Config.clientId}
          redirect_uri={window.location.origin}
          audience={auth0Config.audience}
        >
          <Routes />
        </AuthProvider>
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
);
