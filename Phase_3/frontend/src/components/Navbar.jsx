import "../styles/navbar.css";

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">BeyondChats</h1>

        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
