import React from 'react';
import validator from 'validator';

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { msgError } = useSelector( state => state.ui );

  
  const [ formValues, handleInputChange ] = useForm({
    name: 'Hernando',
    email: 'nando@gmail.com',
    password: '123456',
    confirm: '123456',
  });

  const { name, email, password, confirm } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    
    if( isFormValid() ) {
      dispatch( startRegisterWithEmailPasswordName( email, password, name ) );
    }
  };

  const isFormValid = () => {

    if( name.trim().length === 0 ) {
      dispatch( setError('Name is required'));
      return false;
      
    } else if( !validator.isEmail( email )) {
      dispatch( setError('Email is not valid'));
      return false;

    } else if( password !== confirm || password.length < 5 ){
      dispatch( setError('Password should be at least 6 characters and match each other'));
      return false;
    }

    dispatch( removeError() );
    return true;
  }

  return (
    <>
      <h3 className="auth__title">Registrer</h3>
      <form onSubmit = { handleRegister }>

        {
          msgError && (
            <div className = "auth__alert-error">
              { msgError }
            </div>
          )
        }

        <input className="auth__input" type="text" placeholder="Name" name="name" value = { name } onChange = { handleInputChange }/>
        <input className="auth__input" type="text" placeholder="Email" name="email" value = { email } onChange = { handleInputChange }/>
        <input className="auth__input" type="password" placeholder="Password" name="password" value = { password } onChange = { handleInputChange }/>
        <input className="auth__input" type="password" placeholder="Confirm Password" name="confirm" value = { confirm } onChange = { handleInputChange }/>

        <button className = "btn btn-primary btn-block mb-5" type="submit"> Login </button>

        <Link className = "link" to="/auth/login">
          Already Registered?
        </Link>

      </form>
    </>
  );
};

