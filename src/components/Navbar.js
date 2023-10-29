import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <header className="container">
      <div className="logo">Shortly</div>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resobrces</li>
      </ul>
      <div className="Register">
        <button className="Login">Login</button>
        <button className="Sign">Sign Up</button>
      </div>
    </header>
  );
}

export default Navbar;
