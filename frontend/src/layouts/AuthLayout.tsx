import { PropsWithChildren } from "react";
import LoginSVG from "../assets/login.svg";
import SignupSVG from "../assets/signup.svg";

type AuthLayoutProps = PropsWithChildren<{
  svg: "login" | "signup";
}>;

const AuthLayout = ({ svg, children }: AuthLayoutProps) => {
  return (
    <div className="auth-layout">
      <section className="svg-section">
        <h4 className="brand">Your Todo</h4>
        <img src={svg === "login" ? LoginSVG : SignupSVG} alt="auth svg" />
      </section>
      <section className="auth-section">{children}</section>
    </div>
  );
};

export default AuthLayout;
