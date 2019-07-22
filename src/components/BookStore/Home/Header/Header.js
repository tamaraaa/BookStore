import React from "react";
import Avatar from "./Avatar/Avatar";
import Logo from "../../../shared/Logo";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Avatar />
    </header>
  );
};
export default Header;
