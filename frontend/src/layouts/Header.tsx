import SignOut from "../assets/exit_to_app.svg";

const Header = () => {
  return (
    <nav className="nav">
      <h4 className="welcome-message">
        Welcome, <span>Edward Selirah</span>
      </h4>
      <div className="sign-out">
        <img src={SignOut} alt="sign out" />
        <button>Sign out</button>
      </div>
    </nav>
  );
};

export default Header;
