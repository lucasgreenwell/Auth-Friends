import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <div>
<Link to='/login'>{localStorage.getItem('token')? 'Signout' : 'Login'}</Link>
    </div>
  );
};

export default NavBar;
