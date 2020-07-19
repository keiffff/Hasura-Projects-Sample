import React, { lazy, useState, useEffect, useCallback } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'constants/routes';
import { ApolloProvider } from 'providers/Apollo';
import { useAuth } from 'providers/Auth';

const Home = lazy(() => import('pages/Home'));
const Articles = lazy(() => import('pages/Articles'));
const Profile = lazy(() => import('pages/Profile'));

export const Private = () => {
  const { getTokenSilently } = useAuth();
  const [accessToken, setAccessToken] = useState('');
  const initialize = useCallback(async () => {
    const token = await getTokenSilently();
    if (!token) throw new Error('Failed to get access token');
    setAccessToken(token);
  }, [getTokenSilently]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <ApolloProvider accessToken={accessToken}>
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
    </ApolloProvider>
  );
};
