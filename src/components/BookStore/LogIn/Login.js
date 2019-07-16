import React from 'react';
import './log_in.scss';
import Form from './Form/Form';

const Login = () => {
    return (
        <div className = 'logIn'>
            <h1>Welcome to <span><em>BookStore</em></span> <br/>please log in!</h1>
            <Form />     
        </div>
    )
}
export default Login;
