import React,{useContext} from 'react';
import './App.scss';
import Login from './LogIn/Login';
import Logo from '../shared/Logo';
import {LoginContext} from '../../LogInContext/LoginContext';


const BookStore = () => {
  const context = useContext(LoginContext);
  const [state] = context;
  const page = state.isLogedIn ? null : <Login />;
  return (
    <div className="App">
      <Logo />
      {page}
    </div>
  );
}
export default BookStore;
