import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
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
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
);
