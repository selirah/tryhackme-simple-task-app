import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const PrivateRoute = () => {
  const auth = useAuth();
  return auth?.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
