import { Search, Person, Chat,Notifications } from '@mui/icons-material'
import React from 'react'

function Topbar() {
  return (
    <div className="topbarcontainer">
        <div className="topbarleftcontainer">
        <div className="leftIcon">
            <span className='logo'>Social App</span>
        </div>
        </div>
        <div className="topbarcentercontainer">
            <div className="searchbar">
                <Search className='searchIcon'/>
                <input placeholder='search for friends, post, videos' className='searchInput' />
            </div>
        </div>
        <div className="topbarrightcontainer">
            <div className="topbarlinks">
                <span className='topbarLink'>Homepage</span>
                <span className='topbarLink'>Timeline</span>
            </div>
            <div className="topbarIcons">
            <div className="topbarIconItems">
                <Person/>
                <div className="topbarIconbadge">1</div>
            </div>
            <div className="topbarIconItems">
                <Chat/>
                <div className="topbarIconbadge">2</div>
            </div>
            <div className="topbarIconItems">
                <Notifications/>
                <div className="topbarIconbadge">1</div>
            </div>
            </div>
         <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1522" alt="" className='topbarImg' />
        </div>

    </div>
  )
}

export default Topbar