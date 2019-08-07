import React, { useContext } from "react";
import "./App.scss";
import Login from "./components/BookStore/LogIn/Login";
import { LoginContext } from "./Context/LogInContext/LoginContext";
import Home from "./components/BookStore/Home/Home";

const App = props => {
  const context = useContext(LoginContext);
  const [state] = context;
  const page = state.isLogedIn ? <Home /> : <Login />;
  return (
    <div className="App">
      <Home />
    </div>
  );
};
export default App;
