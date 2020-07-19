import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import createAuth0Client, {
  Auth0Client,
  Auth0ClientOptions,
  RedirectLoginOptions,
  GetTokenSilentlyOptions,
  LogoutOptions,
} from '@auth0/auth0-spa-js';
import { useHistory } from 'react-router-dom';

type User = {
  name: string;
  email: string;
  picture: string;
  sub: string;
};

type Auth0Context = {
  authenticated: boolean;
  currentUser: User;
  loading: boolean;
  loginWithRedirect(options: RedirectLoginOptions): Promise<void>;
  getTokenSilently(options?: GetTokenSilentlyOptions): Promise<string | undefined>;
  logout(options?: LogoutOptions): void;
};

type Props = { children: ReactNode } & Auth0ClientOptions;

const AuthContext = createContext((null as unknown) as Auth0Context);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children, ...initOptions }: Props) => {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setcurrentUser] = useState((null as unknown) as User);
  const [client, setClient] = useState((null as unknown) as Auth0Client);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setClient(auth0FromHook);
      if (window.location.search.includes('code=')) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        history.push(appState?.targetUrl || window.location.pathname);
      }
      const responseIsAuthenticated = await auth0FromHook.isAuthenticated();
      setAuthenticated(responseIsAuthenticated);
      if (responseIsAuthenticated) {
        const responseGetUser = await auth0FromHook.getUser();
        setcurrentUser(responseGetUser);
      }
      setLoading(false);
    };
    initAuth0();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        currentUser,
        loading,
        loginWithRedirect: (options: RedirectLoginOptions) => client.loginWithRedirect(options),
        getTokenSilently: (options?: GetTokenSilentlyOptions) => client.getTokenSilently(options),
        logout: (options?: LogoutOptions) => client.logout(options),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
