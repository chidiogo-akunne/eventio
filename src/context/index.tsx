import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { loginUser, createUser, refreshToken } from "../network/mutation";

interface AuthContextType {
  user: { id: string; firstName: string; lastName: string; email: string };
  loading: boolean;
  error?: any;
  login: (email: string, password: string) => void;
  signUp: (
    email: string,
    firstName: string,
    lastName: string,
    password: string
  ) => void;
  logout: () => void;
  grid: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// Export the provider as we need to wrap the entire app with it
export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [grid, setGrid] = useState(true);
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const history = useHistory();

  // If we change page, reset the error state.
  useEffect(() => {
    if (error) setError(null);
  }, []);

  const { isLoading, isError, error: loginError, mutate, data } = useMutation(
    loginUser
  );
  const {
    isLoading: signupLoading,
    isError: signupIsError,
    error: signupError,
    mutate: signupMutate,
    data: signuoData,
  } = useMutation(createUser);

  const storage = localStorage;

  //login user
  function login(email: string, password: string) {
    setLoading(true);
    if (isLoading) {
      setLoading(true);
    }
    // mutate({ email, password });
    if (isError) {
      setError(loginError);
      setLoading(false);
    }
    if (data) {
      setLoading(false);
      history.push("/");
    }
  }

  // create new user
  function signUp(
    email: string,
    firstName: string,
    lastName: string,
    password: string
  ) {
    setLoading(true);
    if (signupLoading) {
      setLoading(true);
    }
    // signupMutate({ email, password, firstName, lastName });
    if (signupIsError) {
      setError(signupError);
      setLoading(false);
    }
    if (signuoData) {
      setLoading(true);
      history.push("/signin");
    }
  }

  //logout user and clear storage
  function logout() {
    storage.clear();
    window.location.reload();
    history.push("/signin");
  }

  //check grid state
  function getGridState() {
    setGrid(!grid);
  }

  // useEffect(() => {
  //   getGridState;
  // }, []);

  const memoedValue = useMemo(
    () => ({
      loading,
      error,
      login,
      signUp,
      logout,
      grid,
      user,
    }),
    [loading, error]
  );

  // We only want to render the underlying app after we
  // assert for the presence of a current user.
  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
}

// Let's only export the `useAuth` hook instead of the context.
// We only want to use the hook directly and never the context component.
export default function useAuth() {
  return useContext(AuthContext);
}
