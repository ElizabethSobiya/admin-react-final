import React from 'react'
import './Share.css'
import {PermMedia, Label, Room, EmojiEmotions} from '@mui/icons-material'

export default function Share() {
  return (
    <>
    <div className='share'>
        <div className='shareWrapper'>
            <div className="shareTop">
               <img  className='sharePics' src='https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60' alt='pics'/>
               <input placeholder="What's in your mind" className='shareInput'/>
            </div>
            <hr  className='shareHr'/>
            <div className="shareBottom">
              <div className="shareOptions">
                  <PermMedia htmlColor='tomato' className='shareIcon'/>
                  <span className='shareOptionText'>Photo/video</span>
              </div>
              <div className="shareOptions">
                  <Label htmlColor='blue' className='shareIcon'/>
                  <span className='shareOptionText'>Tag</span>
              </div>
              <div className="shareOptions">
                  <Room htmlColor='green' className='shareIcon'/>
                  <span className='shareOptionText'>Location</span>
              </div>
              <div className="shareOptions">
                  <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                  <span className='shareOptionText'>Feelings</span>
              </div>
              <button className='sharebtn'>Share</button>
            </div>
           
        </div>
    </div>
    </>
  )
}
