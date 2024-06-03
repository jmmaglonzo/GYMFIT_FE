import React, {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useEffect,
} from "react";
import { AuthState, AuthAction } from "../types/auth";
import { authReducer } from "../types/authReducer";

const initialState: AuthState = {
  user: null,
};

interface AuthContextProps extends AuthState {
  dispatch: Dispatch<AuthAction>;
}

export const AuthContext = createContext<AuthContextProps>({
  ...initialState,
  dispatch: () => null,
});

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
