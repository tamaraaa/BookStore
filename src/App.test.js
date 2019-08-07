import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow, mount } from "enzyme";
import {
  LoginProvider,
  LoginContext
} from "./Context/LogInContext/LoginContext";
import Login from "./components/BookStore/LogIn/Login";
import Home from "./components/BookStore/Home/Home";
describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <LoginContext.Provider value={{ isLogedIn: false }}>
        <App />
      </LoginContext.Provider>
    );
  });
  it("when not loged in", () => {
    expect(wrapper.find(Login)).toHaveLength(1);
  });
  it("when loged in", () => {
    expect(wrapper.find(Home)).toHaveLength(1);
  });
});
