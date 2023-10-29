import axios from "axios";
import { LoginT } from "../types/Auth";

export const loginUser = async (payload: LoginT) => {
  const res = await axios.post("/user/login", payload);
  if (res.status !== 200) {
    throw new Error("Unable to login");
  }
  return await res.data;
};

export const verifyUserAuth = async () => {
  const res = await axios.get("/user/verify-user");
  if (res.status !== 200) {
    throw new Error("Unable to authenticate");
  }
  return await res.data;
};
