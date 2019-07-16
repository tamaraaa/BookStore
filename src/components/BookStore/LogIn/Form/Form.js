import React, { useState, useContext }from 'react';
import {LoginContext} from '../../../../LogInContext/LoginContext';
import {LOGIN} from '../../../../LogInContext/LoginReducer';
import './form.scss';

 const Form = () =>{
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');   
    const context = useContext(LoginContext);
    const [ state, dispatch] = context;
   
    const emailInputHandler = event => {
        setEmail(event.target.value);
    }
    const passwordInputHandler = event => {
        setPassword(event.target.value);
    }
    const loginHandler = event => {
        event.preventDefault();
        dispatch({type : LOGIN,payload:{email,password}});
        setEmail('');
        setPassword('');
    }
    return (
    <form className='form'>
        <input className='form_input' 
               type='text' 
               placeholder='Your E-mail'
               value={email}
               onChange={emailInputHandler}/>
        <input className='form_input' 
               type='password' 
               placeholder='Password'
               value={password}
               onChange={passwordInputHandler}/>
        <button className='btn' onClick={loginHandler}> Login </button>
    </form>    
    )
}
export default Form;