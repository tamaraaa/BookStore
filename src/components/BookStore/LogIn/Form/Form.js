import React, { useState, useContext } from "react";
import { LoginContext } from "../../../../Context/LogInContext/LoginContext";
import { LOGIN } from "../../../../Context/LogInContext/LoginReducer";
import { emailIsValid } from "../../../../utils";
import { passwordIsValid } from "../../../../utils";
import { isEmpty } from "../../../../utils";

import "./form.scss";

const Form = () => {
  const context = useContext(LoginContext);
  const [state, dispatch] = context;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailInputHandler = event => {
    setEmailError("");
    setEmail(event.target.value);
  };
  const passwordInputHandler = event => {
    setPasswordError("");
    setPassword(event.target.value);
  };

  const handleValidation = (email, password) => {
    let errors = {};
    if (!emailIsValid(email)) {
      errors.email = "Email is not valid";
    }
    if (!passwordIsValid(password)) {
      errors.password = "password requires 6 characters minimum";
    }
    return errors;
  };
  const loginHandler = event => {
    event.preventDefault();
    if (isEmpty(handleValidation(email, password))) {
      dispatch({ type: LOGIN, payload: { email, password } });
    } else {
      setEmailError(handleValidation(email, password).email);
      setPasswordError(handleValidation(email, password).password);
    }
  };
  return (
    <form className="form">
      {state.hasError ? (
        <p>Something went wrong,please check your email or password</p>
      ) : null}
      <input
        className="form_input"
        type="text"
        placeholder="Your E-mail"
        value={email}
        onChange={emailInputHandler}
        required
      />
      {emailError && <span className="form_error">{emailError}</span>}
      <input
        className="form_input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={passwordInputHandler}
        required
      />
      {passwordError && <span className="form_error">{passwordError}</span>}
      <button
        className="btn"
        onClick={loginHandler}
        disabled={!email || !password}
      >
        {" "}
        Login{" "}
      </button>
    </form>
  );
};
export default Form;
