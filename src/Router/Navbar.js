import React from "react";
import styles from './Router.css';
import {Link} from 'react-router-dom'
// import LoginStatusButton from './LoginStatusButton';


function Navbar({setIsLoggedIn,isLoggedIn}) {
//  const [isLoggedIn, setIsLoggedIn] = useState(true)

//  function loginStatusButton(){
//    if(isLoggedIn==true){
//      return <button onClick={ () => {setIsLoggedIn(false)}}>Login</button>
//    }else{
//      return <button onClick={ () => {setIsLoggedIn(true)}}>LogOut</button>
//    }
//  }


function RenderButton(){
  if (isLoggedIn==true){
    return <button onClick={() => {
      localStorage.setItem("isLoggedIn", false)
       setIsLoggedIn(false) }}>Logout</button>
  }else{
    return <button onClick={() => { 
      localStorage.setItem("isLoggedIn", true)
      setIsLoggedIn(true) }}>Login</button>

  }
}

  return (
    <header className={styles.header}>
     <Link to = './' >Home</Link>
      <Link to = './about' >About</Link>
      <Link to = './details' >Details</Link>
      <RenderButton/>
    </header>
  )
}

export default Navbar