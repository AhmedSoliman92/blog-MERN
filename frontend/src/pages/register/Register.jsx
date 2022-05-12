import '../login/login.css'

export default function Register() {
  return (
    <div className="login-container"  >
        <button className="btn register">Login</button>
        <form className="login-form">
            <h1 className="h1-login">Register</h1>
            <input type="text" className="login-input" placeholder="Username"/>
            <input type="email" className="login-input" placeholder="Email"/>
            <input type="password" className="login-input" placeholder="Password"/>
            <input type="password" className="login-input" placeholder="Confirm Password"/>
            <button className="btn">Register</button>
        </form>
    </div>
  )
}
