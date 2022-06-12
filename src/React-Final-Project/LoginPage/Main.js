import React from 'react'


function Main() {
  return (
   <>
    <div className="loginTab">
    <h3>Welcome to Dashboard, Login</h3>
    <br />
    <label className='userText' htmlFor="">Username</label>
    <input type="text" required />
    <br />
    <label className='userText' htmlFor="">Password</label>
    <input type="password" required />
    <br />
    <input className='enterBtn' type="submit" value='LOGIN'/>
    <br />
    <br />
    <input className='enterBtn' type="submit" value='FORGOT YOUR PASSWORD'/>
    </div>
   </>
  )
}

export default Main