import React from 'react'
import './Register.css'

export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Social App</h3>
                <span className='loginDesc'>Connect with friends and the world around you on the socialApp</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                <input  className='loginInput' placeholder='UserName' />
                    <input  className='loginInput' placeholder='Email' />
                    <input  className='loginInput' placeholder='Password' />
                    <input  className='loginInput' placeholder='Password Again' />
                    <button className='loginBtn'>SignUp</button>
                   <button className='loginRegister'>Log Into Account</button>
                </div>
            </div>
        </div>

    </div>
  )
}
