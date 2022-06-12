import React from 'react'
import styles from '../React-Social-App/Style.css'
import './Profile.css'
// import HomePage from './HomePage'
import RightBar from './RightBar'
import Topbar from './Topbar'
import SideBar from './SideBar'
import Feed from './Feed'

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
    <SideBar/>
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img className='profileCoverImg' src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <img className='profileUserImg' src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
            </div>
            <div className="profileInfo">
                 <h4 className='profileInfoName'>Elizabeth</h4>
                 <span className='profileInfoDesc'>Hello my frnds..</span>
                </div> 
        </div>
        <div className="profileRightBottom">
    <Feed/>
    <RightBar profile/>
    </div>
    </div>
    </div>
    </>
  )
}
