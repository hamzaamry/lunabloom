import React , { useState , useEffect } from 'react'
import'../Styles/Signup.css';
import { Link, useNavigate } from 'react-router-dom';


import { useDispatch , useSelector } from 'react-redux';
import { useRegisterMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { toast } from 'react-toastify';

const SignUp = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [name , setName] = useState('')


  const { userInfo } = useSelector((state) => state.auth)

  const [ register , { isLoading }] = useRegisterMutation()

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  } , [ navigate , userInfo ] )


  const submitHandler = async (e) => {
    e.preventDefault()
    console.log('submit')

    try {
      const res = await register ({ name , email , password }).unwrap()
      dispatch(setCredentials({...res}))
      navigate('/From')
      
    } catch (err) {
      toast.info(err?.data?.message || err.message )      
    }


  }
  return (
    
    <div className="login-container">

      <div className="luna__text">
        <h2>LUNABLOOM</h2>
        <p>Create your account in seconds.</p>
      </div>

      <div className="signup-form">

      <div className="title">Sign up</div>
        <div className="form">
          <form onSubmit={submitHandler} >

            <div className="input-container">
              <label>Username </label>
              <input 
                type="text" 
                name="name" 
                onChange={(e) => {setName(e.target.value)}}
                value={name} 
                required />
            </div>

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

            <div className='terms'>
              <p>
                By clicking the button, you agree to the <a href='/' className='terms-link'>Terms of Service</a>
              </p>
            </div>

          

            <div className="button-container">
              <input type="submit" className="submit-btn" value="Sign up" />
            </div>

            <div className='signup-link'>
                You already have an account ? <Link to='/JoinNow'>Sign in</Link> 
            </div>
       </form>
      </div>
    </div>
  </div>
  )
}

export default SignUp