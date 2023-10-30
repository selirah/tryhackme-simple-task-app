import { Link } from "react-router-dom";
import Button from "../components/Button";
import "../css/not-found.css";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h4 className="brand">Your Todo</h4>
      <h4 className="not-found-description">
        The page you are looking for cannot be found
      </h4>
      <Link to="/">
        <Button>Return to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
