import { ReactNode, createContext, useEffect, useState } from "react";
import { loginUser, verifyUserAuth } from "../apis/auth";
import { LoginT, SignupT, UserT } from "../types/Auth";

type UserAuth = {
  isLoggedIn: boolean;
  user: UserT | null;
  login: (payload: LoginT) => Promise<void>;
  signup: (payload: SignupT) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<UserAuth | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserT | null>(null);
  const [isLoggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   // fetch if the user's cookies are valid then skip login
  //   async function checkStatus() {
  //     const data = await verifyUserAuth();
  //     if (data) {
  //       const { user } = data;
  //       setUser({ email: user.email, name: user.name });
  //       setLoggedIn(true);
  //     }
  //   }
  //   checkStatus();
  // }, []);

  const login = async (payload: LoginT) => {
    const data = await loginUser(payload);
    if (data) {
      const { user } = data;
      setUser({ email: user.email, name: user.name });
      setLoggedIn(true);
    }
  };

  const signup = async (payload: SignupT) => {};

  const logout = async () => {};

  const value = {
    user,
    isLoggedIn,
    login,
    signup,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
