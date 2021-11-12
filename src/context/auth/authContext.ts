import { createContext, useContext } from "react";

type AuthType =
  | null
  | {
      error: any;
      status: "unauthenticated" | "loading";
      isAuthenticated: false;
      login: (payload: { email: string; password: string }) => void;
      logout: () => void;
      user: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
      };
    }
  | {
      user: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
      };
      authToken: string;
      refreshToken: string;
      status: "authenticated";
      isAuthenticated: true;
      login: (payload: { username: string; password: string }) => void;
      logout: () => void;
    };

const authContext = createContext<AuthType>(null);

function useAuthContext() {
  const store = useContext(authContext);

  if (!store) {
    throw Error('Cannot use "AuthContext" outside of AuthProvider');
  }

  return store;
}

const { Provider } = authContext;

export { useAuthContext, Provider };
