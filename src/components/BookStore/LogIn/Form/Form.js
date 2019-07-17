import React, { useState, useContext }from 'react';
import {LoginContext} from '../../../../LogInContext/LoginContext';
import {LOGIN} from '../../../../LogInContext/LoginReducer';
import './form.scss';

 const Form = () =>{
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState(''); 
    const context = useContext(LoginContext);
    const [ state, dispatch] = context;
    const [ emailError, setEmailError] = useState('');
    const [ passwordError, setPasswordError ] = useState('');
   
    const emailInputHandler = event => {
        setEmailError('');
        setEmail(event.target.value);
    }
    const passwordInputHandler = event => {
        setPasswordError('');
        setPassword(event.target.value);
    }
    
    const handleValidation = (email,password) =>{
        let errors = {};
        let inputHasError = false;
        let lastAtPos = email.lastIndexOf('@');
        let lastDotPos = email.lastIndexOf('.');
        if ( !(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
            errors.email = "Email is not valid";
            inputHasError = true;                   
        }
         if( password.length < 6 ){
            errors.password = 'password requires 6 characters minimum';
            inputHasError = true;            
        }
        return { inputHasError, errors }; 
    }
        const loginHandler = event => {
            event.preventDefault();        
            if(!handleValidation(email,password).inputHasError){
                dispatch({type : LOGIN,payload:{email,password}});
            } else{
                setEmailError(handleValidation(email,password).errors.email);
                setPasswordError(handleValidation(email,password).errors.password);
            }         
        }
    return (    
    <form className='form'>
        {state.hasError ? <p>Something went wrong,please check your email or password</p> : null}
        <input className='form_input' 
               type='text' 
               placeholder='Your E-mail'
               value={email}
               onChange={emailInputHandler}
               required/>
        { emailError && <span className='form_error'>{emailError}</span> }
        <input className='form_input' 
               type='password' 
               placeholder='Password'
               value={password}
               onChange={passwordInputHandler}
               required/>
        { passwordError && <span className='form_error'>{passwordError}</span> }
        <button className='btn' 
                onClick={loginHandler}
                disabled={!email || !password}> Login </button>
    </form>    
    )
}
export default Form;