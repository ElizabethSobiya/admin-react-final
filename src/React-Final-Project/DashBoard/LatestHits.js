import React from 'react'

import { connect} from 'react-redux'
import { adminData} from '../Redux/action'


function LatestHits(data) {
  return (
     <>
   
    
     </>
  )
}
export default LatestHits

// function LatestHits() {
//   return (
//     <>
//    <div>
//     <h3>Latest Hits</h3>
//     <Bar 
//       data = { {
//         labels: ['January','February','March','April','May','June','July'],
//         datasets : [{
//             label: '# latest',
//             data: [32,47,38,21,55,75,70],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//               ],
//               borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//               ],
//         }],
//        }}
//        height ={400}
//        width ={600}
//        options ={ {
//         maintainAspectRatio: false
//        }}
//      />
//    </div>
//     </>
//   )
// }

// export default LatestHits


// //  const state = {
// //   labels: ['January', 'February', 'March',
// //   'April', 'May'],
// // datasets: [
// // {
// // label: 'Rainfall',
// // backgroundColor: 'rgba(75,192,192,1)',
// // borderColor: 'rgba(0,0,0,1)',
// // borderWidth: 2,
// // data: [65, 59, 80, 81, 56]
// // }
// // ]
// // }

// // export default class App extends React.Component {
// // render() {
// // return (
// // <div>
// // <Bar
// //  data={state}
// //  options={{
// //    title:{
// //      display:true,
// //      text:'Average Rainfall per month',
// //      fontSize:20
// //    },
// //    legend:{
// //      display:true,
// //      position:'right'
// //    }
// //  }}
// // />
// // <div/>
