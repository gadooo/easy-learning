import "./NavBar.css";

function NavBar() {
  return (
    <div class="nav-bar-container">
      <div class="nav-title">EASY LEARNING</div>{" "}
      <ul class="nav-bar">
        {" "}
        <li class="nav-bar-item">Home</li>
        <li class="nav-bar-item">About</li>
        <li class="nav-bar-item">Services</li>
        <li class="nav-bar-item">Contact</li>
      </ul>
    </div>
  );
}

export default NavBar;
