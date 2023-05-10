import React from "react";
import Style from "./Navbar.module.css";

const Navbar = ({ CartItem }) => {
  return (
    <div className={Style.main}>
      <h1>Expense</h1>
      <div className={Style.links}>
        <a href="www.googe.com">Home</a>
        <a href="www.googe.com">About</a>
        <a href="www.googe.com">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
