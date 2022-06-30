import React from 'react'
import {connect} from 'react-redux'
import DashBoard from './React-Final-Project/DashBoard/DashBoard'
import LoginPage from './React-Final-Project/LoginPage/LoginPage'
import { BrowserRouter, Navigate, Route , Routes,} from "react-router-dom";
import ProductPage from './React-Final-Project/ProductPage/ProductPage'
import Accounts from './React-Final-Project/Accounts/Accounts'
import AddProduct from './React-Final-Project/AddProduct'
import { useEffect } from 'react';
// import NavBar from './React-Final-Project/LoginPage/Navbar'
// import { selectUser} from './userSlice'
// import { useSelector } from 'react-redux';
import { adminData } from './React-Final-Project/Redux/action'


 function App(data) {
  
  // console.log(data)

  const CallAPI = data.data.reducer.callApi
  const loginStatus = data.data.reducer.LoginStatus;
  console.log(loginStatus)

  localStorage.setItem('isLoggedIn', loginStatus);
  let isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))

 useEffect( () => {
  if(CallAPI === true){
    data.addData();
  }
 }, [isLoggedIn])


  return (
    <>
   <BrowserRouter>
 
     <Routes>
     <Route path ='/' element = {<LoginPage/>} />
     <Route path ='/dashboard'element = { isLoggedIn == true ? <DashBoard/> : <Navigate to = '/'/>}/>
      <Route path ='/products' element = { isLoggedIn == true ? <ProductPage/> : <Navigate to = '/'/>}/> 
     <Route path ='/accounts' element = { isLoggedIn == true ? <Accounts/> : <Navigate to = '/'/>}/> 
     <Route path ='/addProduct' element = { isLoggedIn == true ? <AddProduct/> : <Navigate to = '/'/>}/> 
      </Routes> 
    </BrowserRouter> 
    </>
  )
}
const mapStateToProps = (props) => ({
  data: props,
})


const mapDispatchToProps = (dispatch) => ({
  addData: (data) => {
    dispatch(adminData());
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
