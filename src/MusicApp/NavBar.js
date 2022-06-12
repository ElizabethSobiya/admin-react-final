import React from 'react'
import './MusicApp.css'
import {Link} from 'react-router-dom'
import { Route } from 'react-router-dom'
// import { Button } from '@mui/material'
import AddSongs from './AddSongs';
import { useHistory } from "react-router-dom";

export default function NavBar() {
  // const button = () => (
  //   <Route render = {({history})=>(
  //     <button type ='button'
  //     onClick ={()=> {history.push('/Addsongs')}}>
  //       add artists
  //     </button>
  //   )} />
  // )
//   let history = useHistory();

//  const redirect = () => {
//    history.push('/AddSongs.js')
//  }

  return (
    <>
    <nav className="navbar">
  <div className="navContainer">
    <a className="navbar-brand">Spongify</a>
    <a className='navbar-brand'>Home</a>
    </div>
    <div>
    <form  role="search" className='topbar' >
      <input type="search" className='inputbar' placeholder="Search" />
      {/* <button  className='navbutton' type="submit">Search</button>  */}
    </form>
    </div>
</nav>
    {/* <button onClick= {redirect}>
   +Add songs </button> */}
    </>
  )
}
