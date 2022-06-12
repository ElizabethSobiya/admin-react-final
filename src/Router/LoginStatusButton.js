import React, {useState} from 'react'



 function LoginStatusButton(){
    const [isLoggedIn, setIsLoggedIn] = useState(true)
   if(isLoggedIn==true){
     return <button onClick={ () => {setIsLoggedIn(false)}}>Login</button>
   }else{
     return <button onClick={ () => {setIsLoggedIn(true)}}>LogOut</button>
   }
 }
export default LoginStatusButton