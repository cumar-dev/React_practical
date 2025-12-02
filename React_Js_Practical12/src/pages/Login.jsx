import React, { useContext } from 'react'
import { AuthContext } from '../Auth,_Context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();
  const hnadleLogin = () => {
    login()
    navigate('/dashboard' );
  }
  return (
    <div>
      <h2>logIn Page</h2>
      <button onClick={hnadleLogin} className='bg-blue-700 text-white py-2 p-3 rounded cursor-pointer'>LogIn</button>
    </div>
  )
}

export default Login;