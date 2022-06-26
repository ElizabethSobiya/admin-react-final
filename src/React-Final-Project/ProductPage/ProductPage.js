import React from 'react'
import './ProductPage.css'
// import NavNew from '../DashBoard/NavNew'
import Footer from '../LoginPage/Footer'
import Product from './Product'
// import Categories from './Categories'
import '../DashBoard/Orders.css'
import Navbar from '../LoginPage/Navbar'


function ProductPage() {
  return (
    <>
    <Navbar/>
    <div className='productPage'>
    <Product/>
    {/* <Categories /> */}
    </div>
    <Footer/>
    </>
  )
}

export default ProductPage