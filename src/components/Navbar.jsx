import "../assets/scss/navbar.scss";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__container">
          <h1 className="navbar__logo">BookingApp</h1>
          <div className="navbar__items">
            <button className="navbar__register">Register</button>
            <button className="navbar__login">Login</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
