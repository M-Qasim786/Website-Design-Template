import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="left">
          <h1>Aditii</h1>
        </div>
        <div className="middle">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Search...."
            autoComplete="off"
            className="search_box"
          />
        </div>
        <div className="right">
          <i class="fa fa-shopping-cart logo_style" aria-hidden="true"></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
