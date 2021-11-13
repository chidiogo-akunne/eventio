import {
  PropsWithChildren,
  useCallback,
  useReducer,
  useEffect,
  useMemo
} from 'react';
import { Provider } from './authContext';
import axios from '../../network/axiosInstance';

//auth initial state
const initialState = {
  user: null,
  error: null,
  status: 'unauthenticated'
};

type FSA = { type: string; payload?: any };

//returns new state depending on the action passed to it, if action passed to it does not exit in action type, it throws an eror
function authReducer(state = initialState, action: FSA) {
  switch (action.type) {
    case 'login/authenticating': {
      return {
        user: null,
        error: null,
        status: 'loading'
      };
    }

    case 'login/authenticated': {
      const { user, authToken, refreshToken } = action.payload;

      return {
        user,
        authToken,
        refreshToken,
        error: null,
        status: 'authenticated'
      };
    }

    case 'login/failed': {
      return {
        user: null,
        error: action.payload,
        status: 'unauthenticated'
      };
    }

    case 'LOGOUT': {
      return initialState;
    }

    default:
      throw Error('Use one of the defined types');
  }
}

//pass data to components it wraps
function AuthProvider(props: PropsWithChildren<unknown>) {
  //set state globally
  const [state, dispatch] = useReducer(authReducer, initialState);

  //login user
  async function loginUser(payload: { email: string; password: string }) {
    try {
      const response = await axios.post('/auth/native', payload);
      const user = response.data;
      const authToken = response.headers['authorization'];
      const refreshToken = response.headers['refresh-token'];
      //set login/authentication state after login is successful
      dispatch({
        type: 'login/authenticated',
        payload: { user, authToken, refreshToken }
      });

      //persist user details and auth token in local storage
      // We delibrately don't persist the refresh token in storage.
      // Todo: A possible way could be to use a http only cookie so new tabs could work
      window.localStorage.setItem('user', JSON.stringify(user));
      window.localStorage.setItem('token', authToken);
    } catch {
      dispatch({
        type: 'login/failed',
        payload: 'Invalid username or password'
      });
    }
  }

  const login = useCallback((payload: { email: string; password: string }) => {
    dispatch({ type: 'login/authenticating' });
    loginUser(payload);
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: 'LOGOUT' });
    logoutUser();
  }, []);

  useEffect(() => {
    //check if token or user tails exits in local storage
    const authToken = window.localStorage.getItem('token');
    const userStr = window.localStorage.getItem('user');

    if (!authToken || !userStr) {
      return;
    }

    const user = JSON.parse(userStr);

    //set auth state
    dispatch({ type: 'login/authenticated', payload: { user, authToken } });
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      login,
      logout,
      isAuthenticated: state.status === 'authenticated'
    }),
    [state, login, logout]
  );

  // @ts-expect-error
  return <Provider value={value}>{props.children}</Provider>;
}

//logout user
export function logoutUser() {
  //clear storage
  window.localStorage.removeItem('user');
  window.localStorage.removeItem('token');
}

export default AuthProvider;
