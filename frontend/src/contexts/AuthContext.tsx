import { ReactNode, createContext, useEffect, useState } from "react";
import { loginUser, signupUser, verifyUserAuth } from "../apis/auth";
import type { LoginT, SignupT, UserResponseT, UserT } from "../types/Auth";
import { AxiosError } from "axios";

type UserAuth = {
  isLoggedIn: boolean;
  user: UserT | null;
  login: (payload: LoginT) => Promise<void>;
  signup: (payload: SignupT) => Promise<void>;
  logout: () => Promise<void>;
  error: string;
  loading: boolean;
};

const AuthContext = createContext<UserAuth | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserT | null>(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch if the user's cookies are valid then skip login
    async function checkStatus() {
      const data = await verifyUserAuth();
      if (data) {
        const { user } = data;
        setUser({ email: user.email, name: user.name });
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    }
    checkStatus();
  }, []);

  const login = async (payload: LoginT) => {
    try {
      setError("");
      setLoading(true);
      const res = await loginUser(payload);
      if (res.data) {
        const { user } = res.data as UserResponseT;
        setLoading(false);
        setUser(user);
        setLoggedIn(true);
      }
    } catch (error) {
      setLoading(false);
      const err = error as AxiosError;
      if (err.response && err.response.data) {
        const { data } = err.response;
        setError(JSON.stringify(data));
      }
    }
  };

  const signup = async (payload: SignupT) => {
    try {
      setError("");
      setLoading(true);
      const res = await signupUser(payload);
      if (res.data) {
        setLoading(false);
        const { user } = res.data as UserResponseT;
        setUser(user);
        setLoggedIn(true);
      }
    } catch (error) {
      setLoading(false);
      const err = error as AxiosError;
      if (err.response && err.response.data) {
        const { data } = err.response;
        setError(JSON.stringify(data));
      }
    }
  };

  const logout = async () => {};

  const value = {
    user,
    isLoggedIn,
    login,
    signup,
    logout,
    loading,
    error
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
