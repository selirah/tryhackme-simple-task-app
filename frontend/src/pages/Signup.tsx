import { useState, FormEvent, useEffect } from "react";
import "../css/auth.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import { useAuth } from "../hooks/useAuth";
import AuthLayout from "../layouts/AuthLayout";
import { toast } from "react-hot-toast";
import type { SignupT } from "../types/Auth";
import Loader from "../components/Loader";

const Signup = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!name) {
      toast.error("Name is required", { id: "login" });
      return;
    }
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
    const payload: SignupT = {
      name,
      email,
      password
    };
    await auth?.signup(payload);
  };

  useEffect(() => {
    if (auth?.user) {
      return navigate("/");
    }
  }, [auth, navigate]);

  return (
    <AuthLayout svg="signup">
      <h4 className="brand">Your Todo</h4>
      <h4 className="auth-title">Sign up</h4>
      <form onSubmit={handleSubmit} role="form">
        {auth?.error ? <Alert color="error">{auth.error}</Alert> : null}
        <div className="input-group">
          <Input
            name="name"
            label="Name"
            placeholder="Enter your name..."
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="input-group">
          <Input
            name="email"
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
        <Button type="submit" color="primary" size="lg" block>
          <div className="btn-content">
            {auth?.loading ? <Loader size="md" /> : null} <span>Sign up</span>
          </div>
        </Button>
      </form>
      <h4 className="footer-text">
        Already have an account?{" "}
        <Link to="/login">
          <span>Sign in</span>
        </Link>
      </h4>
    </AuthLayout>
  );
};

export default Signup;
