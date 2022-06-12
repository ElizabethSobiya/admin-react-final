import React from 'react'
import './CloseFrnds.css'
import {User} from './DummyData'

function CloseFrnds({user}) {
  return (
    <li className='sideBarFriend'>
            <img className='sideBarFriendImg' src={user.profilePicture} alt='pics'/>
            <span className='sideBarFriendName'>{user.username}</span>
          </li>
  )
}

export default CloseFrnds