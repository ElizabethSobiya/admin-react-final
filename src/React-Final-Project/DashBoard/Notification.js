import React from 'react'
import './Performance.css'
import './Notification.css'
// import {useEffect,{ useState }} from 'react'
import { notifications } from '../Data'
import Noti from './Noti'



const Notification =()=> {
  // const [data, setData] = useState([])
  // useEffect( ()=> {
  //   fetch('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
  //   .then((response) => response.json())
  //   .then((data) => setData(data))
  // },[]);

  return (
    
    <>
    <div className='notification' style={{width:'550px', height:'450px'}}>
    <h4>Notification List</h4>
      <div className='notiBar'>
      {notifications.map((p) =>(
    <Noti key = {p.id} noti ={p}/>
   ))}
      </div>
    </div>
    </>
  )
}

export default Notification