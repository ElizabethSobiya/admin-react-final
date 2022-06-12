import React from 'react'
import styles from '../React-Social-App/Style.css'
import HomePage from './HomePage'
import RightBar from './RightBar'
import Topbar from './Topbar'
import SideBar from './SideBar'
import Feed from './Feed'
import Profile from './Profile'




function Main() {
  return (
    <>
    <Topbar/>
    <div className="homecontainer">
    <SideBar/>
    <Feed/>
    <RightBar/>
    </div>
    </>
  )
}

export default Main