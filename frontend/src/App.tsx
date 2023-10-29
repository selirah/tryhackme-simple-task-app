import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import { useAuth } from "./hooks/useAuth";
import PageLoader from "./pages/PageLoader";

function App() {
  const auth = useAuth();
  return (
    <main>
      {auth?.pageLoading ? (
        <PageLoader />
      ) : (
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </main>
  );
}

export default App;
