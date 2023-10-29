import { useState, FormEvent, useEffect } from "react";
import "../css/auth.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { useAuth } from "../hooks/useAuth";
import type { LoginT } from "../types/Auth";
import { toast } from "react-hot-toast";
import Alert from "../components/Alert";
import Loader from "../components/Loader";

const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!email) {
      toast.error("Email is required", { id: "login" });
      return;
    }
    if (!email.match(emailFormat)) {
      toast.error("Enter a valid email address", { id: "login" });
      return;
    }
    if (!password) {
      toast.error("Password is required", { id: "login" });
      return;
    }
    const payload: LoginT = {
      email,
      password
    };
    await auth?.login(payload);
  };

  useEffect(() => {
    if (auth?.user) {
      return navigate("/");
    }
  }, [auth, navigate]);

  return (
    <AuthLayout svg="login">
      <h4 className="brand">Your Todo</h4>
      <h4 className="auth-title">Sign in</h4>
      <form onSubmit={handleSubmit}>
        {auth?.error ? <Alert color="error">{auth.error}</Alert> : null}
        <div className="input-group">
          <Input
            name="email"
            type="text"
            label="Email"
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="input-group">
          <Input
            name="password"
            label="Password"
            placeholder="Enter your password..."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <Button
          type="submit"
          color="primary"
          size="lg"
          block
          disabled={auth?.loading}
        >
          <div className="btn-content">
            {auth?.loading ? <Loader size="md" /> : null} <span>Sign in</span>
          </div>
        </Button>
      </form>
      <h4 className="footer-text">
        Don't have an account?{" "}
        <Link to="/signup">
          <span>Sign up</span>
        </Link>
      </h4>
    </AuthLayout>
  );
};

export default Login;
