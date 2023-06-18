import React, { useState , useEffect } from 'react';
import '../Styles/Signin.css';
import { Link } from 'react-router-dom';

import { useDispatch , useSelector } from 'react-redux';
import { useLoginMutation } from '../../slices/usersApiSlice';
import  { setCredentials } from '../../slices/authSlice'
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';


const Checkbox = ({ handleCheckboxChange }) => {
  
  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleCheckboxChange} />
        Remember me
      </label>
    </div>
  );
};

const Signin = () => {
  // React States
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [checked, setChecked] = useState(false);

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const [ login , { isLoading }] = useLoginMutation()

  const { userInfo } = useSelector( ( state ) => state.auth )
 

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  } , [ navigate , userInfo ] )


  // Checkbox handler
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };


  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    try {
      const res = await login ({ email , password }).unwrap()
      dispatch(setCredentials({...res}))
      navigate('/From')
      
    } catch (err) {
      toast.info(err?.data?.message || err.message )      
    }
  };


  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input 
            type="text" 
            name="email"
            onChange={(e) => {setEmail(e.target.value)}}
            value={email} 
            required />
          
        </div>
        <div className="input-container">
          <label>Password </label>
          <input 
            type="password" 
            name="password"
            onChange={(e) => {setPassword(e.target.value)}}
            value={password} 
            required />
          
        </div>

        <div className='above-input'>
          <Checkbox className='rememberMe' handleCheckboxChange={handleCheckboxChange} />
          <a href='/' className='forget-password'>Forget password ?  </a>
        </div>

        <div className="button-container">
          <input type="submit" className="submit-btn" value="log in" />
        </div>

        <div className='signup-link'>
            You don't have an account ? <Link to='/SignUp'>Sign up</Link>
        </div>  
      </form>
    </div>
  );

  return (
    <div className="login-container">

      <div className="luna__text">
        <h2>LUNABLOOM</h2>
        <p>here you are again</p>
      </div>

      <div className="login-form">
        <div className="title">Log in</div>
        {isSubmitted ? (
          <div>User is successfully logged in</div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
};

export default Signin;
