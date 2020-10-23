import React from 'react';
import { Link } from 'react-router-dom';

export const RegistrerScreen = () => {

  return (
    <>
      <h3 className="auth__title">Registrer</h3>
      <form>

        <input className="auth__input" type="text" placeholder="Name" name="name" />
        <input className="auth__input" type="text" placeholder="Email" name="email" />
        <input className="auth__input" type="password" placeholder="Password" name="password" />
        <input className="auth__input" type="password" placeholder="Confirm Password" name="confirm" />

        <button className = "btn btn-primary btn-block mb-5" type="submit"> Login </button>

        <Link className = "link" to="/auth/login">
          Already Registered?
        </Link>

      </form>
    </>
  );
};

