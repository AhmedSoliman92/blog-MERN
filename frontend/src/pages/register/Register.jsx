import { useRef } from 'react';
import {useNavigate,Link} from 'react-router-dom'
import '../login/login.css';
import axios from 'axios';

export default function Register() {
  const username= useRef();
  const email= useRef();
  const password= useRef();
  const confirmPassword= useRef();
  const navigate = useNavigate()
const handleRegister =async (e)=>{
  e.preventDefault()
 
  if(password.current.value!== confirmPassword.current.value){

    confirmPassword.current.setCustomValidity("Passwords are not match")
  }else{
    const newUser = {
      username:username.current.value,
      email:email.current.value,
      password:password.current.value
    }
    try {
      const res = await axios.post('users/register',newUser);
      console.log(res.data)
      navigate('/login')
    } catch (err) {
      console.log(err)
    }
  }
}

  return (
    <div className="login-container" onSubmit={handleRegister} >
        <Link to='/login'>
          <button className="btn register">Login</button>
        </Link>
        <form className="login-form">
            <h1 className="h1-login">Register</h1>
            <input type="text" className="login-input" placeholder="Username" ref={username} required/>
            <input type="email" className="login-input" placeholder="Email" ref={email} required/>
            <input type="password" className="login-input" placeholder="Password" ref={password} required/>
            <input type="password" className="login-input" placeholder="Confirm Password" ref={confirmPassword} required/>
            <button className="btn" type="submit">Register</button>
        </form>
    </div>
  )
}
