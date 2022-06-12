import React, { useState } from 'react'
import './Post.css'
import {MoreVert} from '@mui/icons-material'
import {Users} from '../React-Social-App/DummyData'

function Post({post}) {

const [like, setLike] = useState(post.like);
const [isLiked, setIsLiked] = useState(false);

const likeHandler = () => {
  setLike(isLiked ? like -1 : like + 1);
  setIsLiked(!isLiked);
}

  return (
   <>
   <div className="post">
     <div className="postWrapper">
     <div className="postTop">
       <div className="postTopLeft">
         <img className='postProfilePic' src= {Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="person" />
         <span className='postUserName'> {Users.filter((u) => u.id === post?.userId)[0].username}</span>
         <span className='postTime'> {post.date} </span>
       </div>
       <div className="postTopRight">
         <MoreVert/>
       </div>
     </div>
     <div className="postCenter">
       <span  className='postText'>{post?.desc}</span>
       <img className='postPostImg' src={post.photo} alt="post" />
     </div>
     <div className="postBottom">
       <div className="postBottomLeft">
         <img  className='likeBtns' src="./heart.png" onClick={likeHandler} alt="heart" />
         <img className='likeBtns' src="./like.png" onClick={likeHandler} alt="like" />
         <span className='likeCounter'>{like}People like it</span>
       </div>
       <div className="postBottomRight">
         <span className='postCommentName'> {post.comment} comments</span>
       </div>
     </div>
     </div>
     

   </div>
   </>
  )
}

export default Post

