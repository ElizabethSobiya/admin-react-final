import React from 'react'
import Orders from './Orders'
import Graphs from './Graphs'
import Navbar from '../LoginPage/Navbar'

function DashBoard() {
  return (
    <>
    <Navbar/>
    <h4>Welcome Back, <b>Admin</b></h4>
    <Graphs/>
    <Orders/>
    </>
  )
}

export default DashBoard