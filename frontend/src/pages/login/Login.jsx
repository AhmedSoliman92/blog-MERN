import './login.css'

export default function Login() {
  return (
    <div className="login-container"  >
        <button className="btn register">Register</button>
        <form className="login-form">
            <h1 className="h1-login">Login</h1>
            <input type="email" className="login-input" placeholder="Email"/>
            <input type="password" className="login-input" placeholder="Password"/>
            <button className="btn">Login</button>
        </form>
    </div>
  )
}
