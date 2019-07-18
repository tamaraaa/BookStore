import React from "react";
import "./log_in.scss";
import Form from "./Form/Form";
import Logo from "../../shared/Logo";

const Login = () => {
  return (
    <div className="logIn">
      <Logo />
      <h1>
        Welcome to{" "}
        <span>
          <em>BookStore</em>
        </span>{" "}
        <br />
        please log in!
      </h1>
      <Form />
    </div>
  );
};
export default Login;
