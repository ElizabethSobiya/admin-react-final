import React from 'react'
import styles from './SideBar.css'
import {RssFeed, Chat, Group, PlayCircleFilledOutline,WorkOutline, HelpOutline, Event, School, Bookmark, PlayCircleFilledOutlined,} from '@mui/icons-material'
import CloseFrnds from './CloseFrnds'
import { Users } from './DummyData'


function SideBar() {
  return (
    <>
    <div className="sidebar">
      <div className='sidebarwrapper'>
        <ul className='sideBarList'>
          <li className='sideBarListItems'>
            <RssFeed className='sideBarIcons'/>
            <span className='sideBarListItemsText'>Feed</span>
          </li>
          <li className='sideBarListItems'>
            <Chat className='sideBarIcons'/>
            <span className='sideBarListItemsText'>Notifications</span>
          </li>
          <li className='sideBarListItems'>
            <PlayCircleFilledOutlined className='sideBarIcons'/>
            <span className='sideBarListItemsText'> Videos</span>
          </li>
          <li className='sideBarListItems'>
            <Group className='sideBarIcons'/>
            <span className='sideBarListItemsText'>Groups</span>
          </li>
          <li className='sideBarListItems'>
            <Bookmark className='sideBarIcons'/>
            <span className='sideBarListItemsText'>BookMark</span>
          </li>
          <li className='sideBarListItems'>
            <HelpOutline className='sideBarIcons'/>
            <span className='sideBarListItemsText'>Question</span>
          </li>
          <li className='sideBarListItems'>
            <WorkOutline className='sideBarIcons'/>
            <span className='sideBarListItemsText'>Jobs</span>
          </li>
          <li className='sideBarListItems'>
            <Event className='sideBarIcons'/>
            <span className='sideBarListItemsText'>Events</span>
          </li>
          <li className='sideBarListItems'>
            <School className='sideBarIcons'/>
            <span className='sideBarListItemsText'>Courses</span>
          </li>
        </ul>
        <button className='sideBarBtn'>
          Show More
        </button>
        <hr className='sideBarHr'/>
        <ul className='sideBarFriendList'>
          {Users.map (u => (
            <CloseFrnds  key = {u.id} user= {u}/>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}

export default SideBar