import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Social App</h3>
                <span className='loginDesc'>Connect with friends and the world around you on the socialApp</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input  className='loginInput' placeholder='Email' />
                    <input  className='loginInput' placeholder='Password' />
                    <button className='loginBtn'>Login</button>
                   <span className='loginForgot'>Forgot Password ?</span>
                   <button className='loginRegister'>Create a New Account</button>
                </div>
            </div>
        </div>

    </div>
  )
}
