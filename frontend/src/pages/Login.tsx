import "../css/auth.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout svg="login">
      <h4 className="brand">Your Todo</h4>
      <h4 className="auth-title">Sign in</h4>
      <form>
        <div className="input-group">
          <Input name="email" label="Email" placeholder="Enter your email..." />
        </div>
        <div className="input-group">
          <Input
            name="password"
            label="Password"
            placeholder="Enter your password..."
            type="password"
          />
        </div>
        <Button type="submit" color="primary" size="lg" block>
          Sign in
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
