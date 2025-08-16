import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar-container">
      <div className="nav-title">EASY LEARNING</div>{" "}
      <ul className="nav-bar">
        {" "}
        <li className="nav-bar-item">Home</li>
        <li className="nav-bar-item">About</li>
        <li className="nav-bar-item">Services</li>
        <li className="nav-bar-item">Contact</li>
      </ul>
    </div>
  );
}

export default NavBar;
