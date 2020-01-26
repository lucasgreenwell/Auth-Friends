import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/newfriend">Add New Friend</Link>
      <Link to="/friends">Friends</Link>
    </div>
  );
};

export default NavBar;
