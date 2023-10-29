import "../css/auth.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import AuthLayout from "../layouts/AuthLayout";

const Signup = () => {
  return (
    <AuthLayout svg="signup">
      <h4 className="brand">Your Todo</h4>
      <h4 className="auth-title">Sign up</h4>
      <form>
        <div className="input-group">
          <Input name="name" label="Name" placeholder="Enter your name..." />
        </div>
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
          Sign up
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
