import React from 'react'
import './Accounts.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from '../LoginPage/Navbar';
import Footer from '../LoginPage/Footer'
import './Accounts.css'
import '../DashBoard/Orders.css'
import { useEffect, useState, useRef } from 'react'
import {connect} from 'react-redux'
import {deleteUser, changeAccountInfo} from '../Redux/action'
import { display } from '@mui/system';



function Accounts(data) {

  const myref = useRef(null);

  const allAccounts = data.data.reducer.accountPage;
 
  /*console.log(accounts) */ 

  const newData = JSON.stringify(allAccounts);
 
  

  localStorage.setItem("accountPageDetails", newData);

  const datalocal = JSON.parse(localStorage.getItem("accountPageDetails"));
  console.log(datalocal)
 
  const [accountInfo, setaccountInfo] = useState([]);
  const [accountHolder, setaccountHolder] = useState("");

  useEffect(() => {}, [datalocal, accountInfo, allAccounts]);

  

  const handleOnClick = (e) => {
    setaccountHolder(e.target.value);

    Object.entries(datalocal).map((item, i) => {
      if (e.target.value === item[0]) {
        setaccountInfo(item[1]);
      }
    });
  };

  const getProfilePic = (e) => {
    e.preventDefault();
    myref.current.click();
  };

  const onclickHandle = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setaccountInfo({ ...accountInfo, profilePic: reader.result });
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const profileUpdateHandler = (e) => {
    e.preventDefault();
    data.updateInfo(accountInfo, accountHolder);
  };

  const deleteAccount = () => {
    data.deleteUser(accountHolder);

    alert("Account Deleted Successfully");
  };


  return (
    <>
    <Navbar/>
    <div className='list'>
    <p className='accountHead'>Lists of Accounts</p>
    <label htmlFor="">Accounts</label>
    <select className='select' onClick={(e) => handleOnClick(e)}>
    <option value="accouts">Select account</option>
        <option value="accouts">Admin</option>
        <option value="accouts">Editor</option>
        <option value="accouts">Merchant</option>
        <option value="accouts">Customer</option>
    </select>
    </div>
    <div className='accountSettings'>
   <div className="avatar">
    <p className='accountHead'>Change Avatar</p>
    <img src={accountInfo.profilePic} style={{width:'300px'}} alt="" />
    <br />
    
    <div className='iconsAvatar' onClick={() => {setaccountInfo({...accountInfo,profilePic: ''})} }><DeleteIcon/></div>
    <input type="file" onChange={(e) => {onclickHandle(e)}} ref = {myref} className ='inptFile' />
    <button className='uploadBtn' onClick={(e)=> {getProfilePic(e)}}>UPLOAD NEW PHOTO</button>
    </div>
    <div className='settings'>
    <p className='accountHead'>Account Settings</p>
    <div className='settingForm'>
    <div  className='leftForm'>
    <form action="">
        <label htmlFor="">Account Name</label>
        <input type="text" className='input'
        value={accountInfo.name}
        onChange= {(e) => setaccountInfo({...accountInfo, name: e.target.value})}
        spellCheck='true' />
        <label htmlFor="">Password</label>
        <input type="text" 
         value={accountInfo.password}
         onChange= {(e) => setaccountInfo({...accountInfo, password: e.target.value})}
        className='input' spellCheck='true' />
        <label htmlFor="">Phone</label>
        <input type="text" 
         value={accountInfo.phone}
         onChange= {(e) => setaccountInfo({...accountInfo, phone: e.target.value})}
        className='input' spellCheck='true'/>
    </form>
    </div>
    <div  className='rightForm'>
    <form action="">
        <label htmlFor="">Account Email</label>
        <input type="text" 
         value={accountInfo.email}
         onChange= {(e) => setaccountInfo({...accountInfo, email: e.target.value})}
        className='input' spellCheck='true' />
        <label htmlFor="" >Re-enter Password</label>
        <input type="text"
         value={accountInfo.password}
         onChange= {(e) => setaccountInfo({...accountInfo, password: e.target.value})}
        className='input' spellCheck='true' />
    </form>
    <button className='updateBtn' onClick={(e) => {profileUpdateHandler(e)}}>UPDATE YOUR PROFILE</button>
    </div>
    </div>
    
    <button className='dltBtn' onClick={() => {deleteAccount()}}>DELETE YOUR ACCOUNT</button>
    </div>
    </div>
    <Footer/>
    </>
  )
}

const mapStateToProps = (props) => ({
  data:props,
});

const mapDispatchToProps = (dispatch) =>({
  updateInfo: (val, name) => {
    dispatch(changeAccountInfo(val, name));
  },
  deleteUser: (userName) =>{
    dispatch(deleteUser(userName))
  }
})

export default  connect (mapStateToProps, mapDispatchToProps) (Accounts)