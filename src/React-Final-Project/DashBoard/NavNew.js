import React from 'react'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { Link } from 'react-router-dom';
import './Orders.css'

function NavNew() {
  return (
    <>
    <div className="navBar">
    <div className="leftside">
        <h4>Product admin</h4>
    </div>
     <div className="rightIcons">
     <div className="loginTag"  >
      <br />
    
<i className='fa fa-tachometer' style={{fontSize:'27px'}} ></i>
         <Link to='/dashboard'><p className="iconText">Dashboard</p></Link>
    </div>
    
     <div className="loginTag">
        <ShoppingCartRoundedIcon fontSize='10px' className='loginIcons'/>
        <Link to='/products'><p className="iconText">Products</p></Link>
         </div>
    <div className="loginTag"> 
    <PersonOutlineRoundedIcon fontSize='10px' className='loginIcons'/>
    <Link to='/accounts'><p className="iconText">Accounts</p></Link>
    </div>
     </div>
     <p className='logout'>Admin, <b>Logout</b></p>
    </div>
    
    </>
  )
}

export default NavNew