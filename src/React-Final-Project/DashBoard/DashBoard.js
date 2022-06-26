import React, {useState, useEffect} from 'react'
import Footer from '../LoginPage/Footer'
// import {notifications, orders} from '../Data'
import './Dashboard.css'
import { adminData } from '../Redux/action'
import { connect } from 'react-redux'
import Navbar from '../LoginPage/Navbar'
// import { notifications } from '../Data'
// import Noti from './Noti'
import { Line, Pie, Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import './Performance.css'
import './Orders.css'
import './Notification.css'

// import { useEffect, useState } from 'react'

function DashBoard(data) {

  let val = data.data;
  // console.log(data);

  
  const [notification, setnotification] = useState([]);
  const [orders, setorders] = useState([]);

  // const value = Object.values(performance).map((value, i) => {
  //   return value;
  // });
  // const key = Object.keys(performance).map((key, i) => {
  //   return key;
  // });
// const storageValue = Object.values(storage).map((item) => item);
  
// console.log(data.data.reducer.dashboradPage.notifications)
  useEffect(() => {
    if (val.reducer.accountPage.length !== 0) {
      setnotification(data.data.reducer.dashboradPage.notifications);
      setorders(data.data.reducer.dashboradPage.orders);
    }
  }, [val]);
  

  return (
    <>
    <Navbar/>
    <p className='graphshead'>Welcome Back, <b>Admin</b></p>
    <div className='upperDash'>
    <div className='latestMain' style={{width:'550px', height:'350px'}}>
   <h4>Latest Hits</h4>
   <div  className= 'latest' style={{width:'500px', height:'250px'}}>
    <Line 
      data = { {
        labels: ["January","February","March","April","May","June","July"],
        datasets: [
              {type:'line',
              label:'latest hits',
              data: [88,70,79,56,50,55,72],
              backgroundColor: '#40E0D0',
              borderColor:'#40E0D0'},
              {type:'line',
              label:'popular',
              data: [32,47,38,21,55,75,70],
              backgroundColor: 'tomato',
              borderColor:'tomato'},
              {type:'line',
              label:'featured',
              data: [43,20,39,46,86,66,80],
              backgroundColor: '#6f42c1',
              borderColor:'#6f42c1'}
        ],
       }}
      
       options ={ {
        maintainAspectRatio: false,
        indexAxis: 'x',
        lineTension: 0.3,
        borderWidth:4,
        color:'white',
        width: '20px',
        elements:{
           point:{
            radius:0,
            borderWidth:0,
           }
        },
        scales: {
            y: {
              min:10,
                ticks: {
                    color:'white',
                    stepSize: 10
                   
                },               
            },
            x: {
               
                ticks: {
                    color:'white',
                    
                }
            },
        }
       }}
     />
   </div>
   </div>
   <div className='perMain' style={{width:'550px', height:'350px'}}>
   <h4>Performance</h4>
   <div  className= 'performance' style={{width:'500px', height:'250px'}}>
    <Bar 
      data = { {
        labels: ["Aqua","Blue","Green","Orange","Purple","Red","Yellow"],
       
        datasets: [{
          label: '# of hits',
          data: [40, 44, 28, 38, 58, 34, 48],
          backgroundColor:['tomato', '#40E0D0', '#90EE90', '#FDDA0D', '#6f42c1', '#fd7e14', '#007FFF'],
          barPercentage: 0.12,
          barThickness:4,
          maxBarThickness:8,
        }]
       }}  
       options ={ {
        maintainAspectRatio: false,
        indexAxis: 'y',
        color:'white',
        width: '10px',
        scales: {
            y: {
                ticks: {
                    color:'white',
                   
                },   
            },
            x: {
                min:20,
                ticks: {
                    color:'white',
                    stepSize: 10
                }
            },
        }
       }}
     />
   </div>
   </div>
    </div>
    <div className='lowerDash'>
    <div className="storageInfo" style={{width:'550px', height:'450px'}}>
        <h4>Storage Information</h4>
        <div style={{width:'500px', height:'350px'}} >
        <Pie 
      data = { {
        labels: ['Used Storage(18.240GB)', 'System Storage(6.500GB)', 'Available Storage(9.150GB)'],
       
        datasets: [{
          label: '# of hits',
          data: [18.240, 9.150, 6.500],
          backgroundColor:['tomato', '#40E0D0', '#90EE90', '#FDDA0D', '#6f42c1', '#fd7e14', '#007FFF'],
          barPercentage: 0.12,
          barThickness:6,
          maxBarThickness:8,
        }]
       }}  
       options ={ {
        maintainAspectRatio: false,
        indexAxis: 'y',
        color:'white',
        width: '10px',
       }}/>   
        </div>
    </div>

    {/* notification wrapper */} {/* 
      {/* <p><b>Jessica</b> and <b>6 others</b> sent you new <a href="">product updates</a>. Check new orders</p> */}
      {/* </div>  */}
    <div className='notification' style={{width:'550px', height:'450px'}}>
    <h4>Notification List</h4>
    {/* <div className='notiBar'> */}
       <div className="notiBarItems"> 
       {notification.map((items, i) => {
      return(
          <div className="notiBarCircle" key={i}>
         <img className='roundPic' src={items.pic}  alt="pics" />
        
         <p>{items.message} <span>{items.time}</span></p>
         
         </div>)
     })} 
  </div>
    {/* </div> */}
    </div>
   </div>
     {/* notification wrapper */}
    <div className="orders">
      <h3 className='orderHead'>Orders List</h3>
      <div className="orderTable">
        <table>
          <tbody>
          <tr>
            <th>ORDER NO.</th>
            <th>STATUS</th>
            <th>OPERATORS</th>
            <th>LOCATION</th>
            <th>DISTANCE</th>
            <th>START DATE</th>
            <th>EST DELIVERY DUE</th>
            </tr>
         
           {orders.map((order, i) => {
          return (
            <tr key={i}>
            <td>{order.orderNo}</td>
            <td> <span className='dot'></span>{order.status}</td>
            <td>{order.operators}</td>
            <td>{order.location}</td>
            <td>{order.distance}</td>
            <td>{order.startDate}</td>
            <td>{order.deliveryDate}</td>
          </tr>)
          })}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </>
  )
  
}

const mapstateToProps = (props) => ({
  data: props,
});

const mapDispatchToProps = () => ({
  addData: () => {
    adminData();
  },
});

export default connect(mapstateToProps, mapDispatchToProps)(DashBoard);