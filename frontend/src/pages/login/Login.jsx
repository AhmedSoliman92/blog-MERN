import './login.css'
import {useRef, useContext} from 'react'
import {Context} from '../../contextAPI/Context';
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Login() {
  const usernameRef=useRef();
  const passwordRef=useRef();
  const {loading,error, dispatch}= useContext(Context);
  const handleLogin = async(e)=>{
    e.preventDefault()
    const authUser = {
      username:usernameRef.current.value,
      password: passwordRef.current.value
    }
      try {
        dispatch({type:"LOGIN"})
      const res = await axios.post('users/login',authUser);
        dispatch({
        type:"SUCCESS_LOGIN",
        payload:res.data
      })
      res.data && window.location.replace('/');

      } catch (err) {
        dispatch({
          type:"FAILUIRE_LOGIN",
          payload: err.response.data
        })
      }

  }
  return (
    <div className="login-container"  >
        <Link to='/register'>
          <button className="btn register">Register</button>
        </Link>
        
        <form className="login-form" onSubmit={handleLogin}>
            {error? <span className='error'>{error}</span>:''}
            <h1 className="h1-login">Login</h1>
            <input type="text" className="login-input" placeholder="Email" ref= {usernameRef} required/>
            <input type="password" className="login-input" placeholder="Password" ref={passwordRef} required/>
            <button className="btn">Login</button>
            {loading? <span className='loading'>Loading...</span>:''}
            
        </form>
    </div>
  )
}
