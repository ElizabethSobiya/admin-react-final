import React from 'react'
import './Performance.css'
import './Notification.css'
// import {useEffect,{ useState }} from 'react'
import { orders } from '../Data'

function Table({order}) {
  return (
   <>
   <tbody>
   <tr>
            <td>{order.orderNo}</td>
            <td> <span className='dot'></span>{order.status}</td>
            <td>{order.operators}</td>
            <td>{order.location}</td>
            <td>{order.distance}</td>
            <td>{order.startDate}</td>
            <td>{order.deliveryDate}</td>
          </tr>
   </tbody>
   </>
  )
}

export default Table