import SignOut from "../assets/exit_to_app.svg";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  const auth = useAuth();

  const onLogoutClick = async () => {
    await auth?.logout();
  };

  return (
    <nav className="nav">
      <h4 className="welcome-message">
        Welcome, <span>{auth?.user?.name}</span>
      </h4>
      <div className="sign-out">
        <img src={SignOut} alt="sign out" />
        <button onClick={onLogoutClick}>Sign out</button>
      </div>
    </nav>
  );
};

export default Header;
