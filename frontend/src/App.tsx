import { Routes, Route } from "react-router-dom";
import Home from "../../frontend/src/pages/Home";
import Login from "../../frontend/src/pages/Login";
import Signup from "../../frontend/src/pages/Signup";
import NotFound from "../../frontend/src/pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import { useAuth } from "../../frontend/src/hooks/useAuth";
import PageLoader from "../../frontend/src/pages/PageLoader";

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
