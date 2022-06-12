import React, {useState} from 'react'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import SpeedIcon from '@mui/icons-material/Speed';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
// import  {MenuItem}  from '@mui/material';
// import {style} from './LoginPage.css'
import  {MenuItem}  from '@material-ui/core';

function Navbar() {
//     const [background, setBackground] = useState('#f8f9fa');
// const changeColor = (background) => {
//     setBackground(background)
// onClick ={() => changeColor('#fd7e14')}
// };

  return (
    <>
    <div className="navBar">
    <div className="leftside">
        <h4>Product admin</h4>
    </div>
     <div className="rightIcons">
     <div className="loginTag"  >
      <br />
     <MenuItem component ={Link} to = '/dashboard' style={{ textDecoration: 'none',
      border:'none', outline:'none', backgroundColor: '#567086', fontSize:'16px',
       display:'flex',
       flexDirection:'column', padding:'45px' }} className='iconText'>
         <SpeedIcon fontSize='10px' className='loginIcons' />
         {/* <i className="fas-fa-tachometer-alt"></i>  */}
    {/* <Link to ='/dashboard' style={{ textDecoration: 'none' }}> */}
       Dashboard</MenuItem>
        {/* </Link>
        <Link to='/dashboard' style={{ textDecoration: 'none' }}>
   <MenuItem>Notifications</MenuItem>
</Link> */}
    </div>
     <div className="loginTag">
        <InsertDriveFileIcon fontSize='10px' className='loginIcons'/>
        <div className="dropdown">
        <p className='iconText'>Reports<i className="fa fa-caret-down"></i></p>
    <div className="dropdown-content">
      <a >Daily reports</a>
      <a >Weekly reports</a>
      <a >Yearly reports</a>
    </div>
  </div> 
  </div>
     <div className="loginTag">
        <ShoppingCartRoundedIcon fontSize='10px' className='loginIcons'/>
         <p className='iconText'>Products </p>
         </div>
    <div className="loginTag"> 
    <PersonOutlineRoundedIcon fontSize='10px' className='loginIcons'/>
    <p className='iconText'>Accounts</p>
    </div>
    <div className="loginTag">
         <SettingsIcon fontSize='10px' className='loginIcons'/>
         <div className="dropdown">
        <p className='iconText'>Settings <i className="fa fa-caret-down"></i></p>
    <div className="dropdown-content">
      <a>Profile</a>
      <a>Billing</a>
      <a>Customize</a>
    </div>
  </div> 
         </div>
     </div>
    </div>
    </>
  )
}

export default Navbar