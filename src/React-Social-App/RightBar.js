import React from 'react'
import styles from './RightBar.css'
import {Users} from './/DummyData'
import Online from './Online'

function RightBar({profile}) {

const HomeRightBar = () => {
  return (
    <>
     <div className="birthdayContainer">
          <img className='bdyImg' src="./gift.png" alt="" />
           <span className='bdyText'><b>Pola Foster</b> and <b> 3 other frnds</b> have birth today.</span>
        </div>
          <img className='rightBarAd' src="https://images.unsplash.com/photo-1619537903549-0981d6bca911?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGZyaWVuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        <h4 className='rightBarTitle'>Online Friends</h4>
        <ul className='rightBarFriendsList'>
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
    </>
  )
}

const ProfileRightBar = () => {
  return (
     <>
     <h4 className='rightBarTitle'>User Information</h4>
     <div className="rightBarInfo">
       <div className="rightBarInfoItem">
         <span className='rightBarInfoKey'>City :</span>
         <span className='rightBarInfoValue'> Karaikudi</span>
       </div>
       <div className="rightBarInfoItem">
         <span className='rightBarInfoKey'>From :</span>
         <span className='rightBarInfoValue'> Tamil Nadu</span>
       </div>
       <div className="rightBarInfoItem">
         <span className='rightBarInfoKey'>Relationship :</span>
         <span className='rightBarInfoValue'> Single</span>
       </div>
    </div>
    <h4 className='rightBarTitle'>User friends</h4>
    <div className="rightBarFollowings">
      <div className="rightBarFollowing">
        <img  className='rightBarFollowingImg' src="https://media.istockphoto.com/photos/shot-of-a-young-man-using-his-smartphone-to-send-text-messages-picture-id1358205700?b=1&k=20&m=1358205700&s=170667a&w=0&h=9pXGgsARkOerFs8_XloUCdGhsQXYKyMntJlgDliOEtY=" alt="" />
        <span className='rightBarFollowingName'>Joseph</span>
      </div>
      <div className="rightBarFollowing">
        <img  className='rightBarFollowingImg' src="https://media.istockphoto.com/photos/shot-of-a-young-man-using-his-smartphone-to-send-text-messages-picture-id1358205700?b=1&k=20&m=1358205700&s=170667a&w=0&h=9pXGgsARkOerFs8_XloUCdGhsQXYKyMntJlgDliOEtY=" alt="" />
        <span className='rightBarFollowingName'>Joseph</span>
      </div>
      <div className="rightBarFollowing">
        <img  className='rightBarFollowingImg' src="https://media.istockphoto.com/photos/shot-of-a-young-man-using-his-smartphone-to-send-text-messages-picture-id1358205700?b=1&k=20&m=1358205700&s=170667a&w=0&h=9pXGgsARkOerFs8_XloUCdGhsQXYKyMntJlgDliOEtY=" alt="" />
        <span className='rightBarFollowingName'>Joseph</span>
      </div>
      <div className="rightBarFollowing">
        <img  className='rightBarFollowingImg' src="https://media.istockphoto.com/photos/shot-of-a-young-man-using-his-smartphone-to-send-text-messages-picture-id1358205700?b=1&k=20&m=1358205700&s=170667a&w=0&h=9pXGgsARkOerFs8_XloUCdGhsQXYKyMntJlgDliOEtY=" alt="" />
        <span className='rightBarFollowingName'>Joseph</span>
      </div>
      <div className="rightBarFollowing">
        <img  className='rightBarFollowingImg' src="https://media.istockphoto.com/photos/shot-of-a-young-man-using-his-smartphone-to-send-text-messages-picture-id1358205700?b=1&k=20&m=1358205700&s=170667a&w=0&h=9pXGgsARkOerFs8_XloUCdGhsQXYKyMntJlgDliOEtY=" alt="" />
        <span className='rightBarFollowingName'>Joseph</span>
      </div>
      <div className="rightBarFollowing">
        <img  className='rightBarFollowingImg' src="https://media.istockphoto.com/photos/shot-of-a-young-man-using-his-smartphone-to-send-text-messages-picture-id1358205700?b=1&k=20&m=1358205700&s=170667a&w=0&h=9pXGgsARkOerFs8_XloUCdGhsQXYKyMntJlgDliOEtY=" alt="" />
        <span className='rightBarFollowingName'>Joseph</span>
      </div>
    </div>
     </>
    )
}

  return (
    <div className='rightbar'>
      <div className="rightBarWrapper">
      {profile ? <ProfileRightBar/> : <HomeRightBar/>}
      </div>
    </div>
  )
}

export default RightBar