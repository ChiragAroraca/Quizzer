import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="navbar-brand">
        <h2>Quizzers</h2>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
