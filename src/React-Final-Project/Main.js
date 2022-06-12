import React from 'react'
import DashBoard from './DashBoard/DashBoard'
import LoginPage from './LoginPage/LoginPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import LatestHits from './DashBoard/LatestHits'


function Main() {
  return (
    <>
    {/* <LatestHits/> */}
   <BrowserRouter>
     <Routes>
     <Route path ='/' element = {<LoginPage/>}/>
     <Route path ='/dashboard'element = {<DashBoard/>}/>
      {/* <Route path ='/products' element = {<ProductPage/>}/>
     <Route path ='/accounts' element = {<Accounts/>}/> */}
      </Routes> 
    </BrowserRouter> 
    </>
  )
}

export default Main