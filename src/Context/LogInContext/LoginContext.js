import React, { createContext, useReducer, useMemo } from "react";
import reducer from "./LoginReducer";

const userState = {
  hasError: false,
  activUser: null,
  isLogedIn: false,
  users: [
    {
      name: "Tamara",
      email: "tamara.bla@gmail.com",
      password: "blabla1",
      id: Math.random()
    },
    {
      name: "Ana",
      email: "ana.bla@gmail.com",
      password: "myPassword1",
      id: Math.random()
    }
  ]
};

const LoginContext = createContext();

const LoginProvider = props => {
  const [state, dispatch] = useReducer(reducer, userState);
  const value = useMemo(() => [state, dispatch], [state]);
  return (
    <LoginContext.Provider value={value}>
      {props.children}
    </LoginContext.Provider>
  );
};
export { LoginProvider, LoginContext };
