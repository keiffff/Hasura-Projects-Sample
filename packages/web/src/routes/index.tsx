import React, { useCallback } from 'react';
import { useAuth } from 'providers/Auth';
import { LoadingScreen } from 'components/LoadingScreen';
import { Private } from './Private';
import { Public } from './Public';

export const Routes = () => {
  const { authenticated, loginWithRedirect, loading } = useAuth();
  const handleLoginWithRedirect = useCallback(
    () => loginWithRedirect({ redirect_uri: window.location.origin }),
    [loginWithRedirect],
  );

  return loading ? (
    <LoadingScreen />
  ) : authenticated ? (
    <Private />
  ) : (
    <Public onMounted={handleLoginWithRedirect} />
  );
};
