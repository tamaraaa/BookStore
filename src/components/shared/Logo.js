import React from "react";
import logo from "../../images/logo.png";
import "./logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
      <p>
        <em>BookStore</em>
      </p>
    </div>
  );
};
export default Logo;
