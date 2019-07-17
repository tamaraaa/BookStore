import React,{useContext} from 'react';
import './App.scss';
import Login from './LogIn/Login';
import {LoginContext} from '../../LogInContext/LoginContext';
import Home from './Home/Home';


const App = () => {
  const context = useContext(LoginContext);
  const [state] = context;
  const page = state.isLogedIn ? <Home /> : <Login />;
  return (
    <div className="App">
      {page}
    </div>
  );
}
export default App;
