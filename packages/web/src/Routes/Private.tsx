import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'constants/routes';

const Home = lazy(() => import('pages/Home'));
const Articles = lazy(() => import('pages/Articles'));
const Profile = lazy(() => import('pages/Profile'));

export const Private = () => {
  return (
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
  );
};
