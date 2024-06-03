export interface User {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
}

export type AuthAction = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };
