import React from 'react'
// import CatTable from './CatTable'
// import {category} from '../Data'handleDeleteClick = {handleDeleteClick} 
import data from '../mock.data.json'
import { useState } from 'react'


function Categories() {
  const [products, setProducts] = useState(data)
  return (
    <>
   <div className="category">
   <h4 style={{margin:'40px 0px 10px 30px'}}>Product Categories</h4>
   <div className="tableCat">
   <table style={{width:'280px', padding:'10px'}}>  
   <tbody>
   {products.map((product) => 
   <tr> 
    <td>{product.category}</td>
    <td><div className='icons' ><i className='fa fa-trash'  
    style={{fontSize:'20px'}}></i></div></td>
    </tr>)}
   </tbody>
        
    </table>
   </div>
    <button className='categoryBtn'>ADD CATEGORY</button>
   </div>
    </>
  )
}

export default Categories