import React from "react";
import {Link} from "react-router-dom"
const Nav = () => {
  return (
      <div className="navContain">
        <h3 className="logo">Arthurs Shop</h3>     
         <Link to={'/origami69/Home'}>Home</Link>
         <Link to={'/Store'}>Store</Link>
      </div>
    );
  };
  
  export default Nav;
  