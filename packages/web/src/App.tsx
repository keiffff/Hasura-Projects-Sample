import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AuthProvider } from 'providers/Auth';
import { auth0Config } from 'variants/authConfig';
import { routes } from 'constants/routes';
import { ErrorBoundary } from 'components/Errorboundary';
import { LoadingIndicator } from 'components/LoadingIndicator';

const Home = lazy(() => import('pages/Home'));
const Articles = lazy(() => import('pages/Articles'));
const Profile = lazy(() => import('pages/Profile'));

export const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Suspense fallback={<LoadingIndicator />}>
        <AuthProvider
          domain={auth0Config.domain}
          client_id={auth0Config.clientId}
          redirect_uri={window.location.origin}
          audience={auth0Config.audience}
        >
          <Switch>
            <Route path={routes.home} exact>
              <Home />
            </Route>
            <Route path={routes.articles}>
              <Articles />
            </Route>
            <Route path={routes.profile}>
              <Profile />
            </Route>
            <Redirect to={routes.home} />
          </Switch>
        </AuthProvider>
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
);
