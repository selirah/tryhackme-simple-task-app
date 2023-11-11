import axios from "axios";
import type { LoginT, SignupT } from "../types/Auth";

export const loginUser = async (payload: LoginT) => {
  return axios.post("/user/login", payload);
};

export const signupUser = async (payload: SignupT) => {
  return axios.post("/user/signup", payload);
};

export const verifyUserAuth = async () => {
  return axios.get("/user/verify-user");
};

export const logoutUser = async () => {
  const res = await axios.get("/user/logout");
  if (res.status !== 200) {
    throw new Error("Unable to logout user");
  }
  return await res.data;
};
