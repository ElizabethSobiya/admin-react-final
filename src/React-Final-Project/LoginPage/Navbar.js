import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { changeIsLoggedOut } from '../Redux/action';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { Link, useNavigate } from 'react-router-dom';


function Navbar(data) {

 const logoutStatus = data.data.reducer.LoginStatus;
 const [isActiveDashboard, setIsActiveDashboard] = useState(false);
 const [isActiveProduct, setIsActiveProduct] = useState(false);
 const [isActiveAccount, setIsActiveAccount] = useState(false);
 const navigate = useNavigate()

 const click = JSON.parse(localStorage.getItem('isLoggedIn'));

 console.log(click)

 useEffect(() => {
  if(click == true){
    setIsActiveDashboard(true);
  }else{
    setIsActiveAccount(false)
    setIsActiveProduct(false)
    setIsActiveDashboard(false)
  }
 }, [click])

function LoginBtnfunc(){
  if(logoutStatus == true){
    return (
      <button className='loginNavBtn' onClick={() => {logout()}}>Admin, <span className='spanBtn'>Logout</span></button>
    );
  }else{
    return ( <button className='loginNavBtn'> <span className='spanBtn'></span> </button>)
  }
}

function logout(){
  data.logout(false);
  navigate('/')
}

const handleDashboardClick = () => {
  if(logoutStatus == true){
    setIsActiveAccount(false)
    setIsActiveProduct(false)
    setIsActiveDashboard(true)
  }
}

const handleProductClick = () => {
  if(logoutStatus == true){
    setIsActiveAccount(false)
    setIsActiveProduct(true)
    setIsActiveDashboard(false)
  }
}
const handleAccountClick = () => {
  if(logoutStatus == true){
    setIsActiveAccount(true)
    setIsActiveProduct(false)
    setIsActiveDashboard(false)
  }
}

  return (
    <>
    <div className="navBar">
    <div className="leftside">
        <h4>Product admin</h4>
    </div>
     <div className="rightIcons">
     <div className="loginTag"  >
         <i className='fa fa-tachometer' style={{fontSize:'27px'}} ></i>
         <Link to='/dashboard'
          styles={{ background: isActiveDashboard ? '#F5A623' : '', color : isActiveDashboard ? 'white' : '', }}
           onClick ={() => {
            handleDashboardClick()
           }}
          ><p className="iconText">Dashboard</p></Link>
    </div> 
     <div className="loginTag" >
        <ShoppingCartRoundedIcon fontSize='10px' className='loginIcons'/>
        <Link to='/products' 
        styles={{ background: isActiveProduct ? '#F5A623' : '', color : isActiveProduct ? 'white' : '', }}
        onClick ={() => {
         handleProductClick()
        }}><p className="iconText">Products</p></Link>
         </div>
    <div className="loginTag"> 
    <PersonOutlineRoundedIcon fontSize='10px' className='loginIcons'/>
    <Link to='/accounts'  
    styles={{ background: isActiveAccount ? '#F5A623' : '', color : isActiveAccount ? 'white' : '', }}
    onClick ={() => {
     handleAccountClick()
    }}><p className="iconText">Accounts</p></Link>
    </div>  
     </div>
     <LoginBtnfunc/>
    </div>
    
    </>
  )
}
const mapStateToProps = (props) => ({
  data: props,
})

const mapDispatchToProps = (dispatch) => ({
  logout: (data) => {
    dispatch(changeIsLoggedOut(data))
  },
})

export default  connect (mapStateToProps, mapDispatchToProps) (Navbar)