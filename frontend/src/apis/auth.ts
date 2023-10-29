import axios from "axios";
import type { LoginT, SignupT } from "../types/Auth";

export const loginUser = async (payload: LoginT) => {
  return await axios.post("/user/login", payload);
};

export const signupUser = async (payload: SignupT) => {
  return await axios.post("/user/signup", payload);
};

export const verifyUserAuth = async () => {
  const res = await axios.get("/user/verify-user");
  if (res.status !== 200) {
    throw new Error("Unable to authenticate");
  }
  return await res.data;
};
