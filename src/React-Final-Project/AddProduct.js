import React, { useState } from 'react'
import './ProductPage/ProductPage.css'
// import NavNew from './DashBoard/NavNew'
import Footer from './LoginPage/Footer'
import styles from  './AddProduct.css'
import {useRef} from 'react'
// import {products} from './Data'
// import data from './mock.data.json'
// import {nanoid} from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { addNewProduct, modifyCallApi } from './Redux/action'
import moment from 'moment'
import Navbar from './LoginPage/Navbar'


function AddProduct(props) {

  let navigateToProduct = useNavigate();
 const myContainer = useRef(null) 
const [File, setFile] = useState([]);

const getFileFromIcon= () => {
  myContainer.current.click()
}
const getFileFromBtn = (e) => {
  e.preventDefault();
  myContainer.current.click();
};
const onSubmitHandler = (e) => {
  e.preventDefault();
  let expiryDate = e.target.expireDate.value.toString();

  const date = moment(expiryDate).format("DD MMMM YYYY");

  let newProductObject = {
    category: e.target.productDescription.value,
    description:
      e.target.productName.value +
      " - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
    expireDate: date,
    name: e.target.productName.value,
    stock: e.target.UnitsInStock.value,
    unitSold: "1,450",
    image: myContainer.current.value,
  };
  e.target.productDescription.value = "";
  e.target.productName.value = "";
  e.target.expireDate.value = "";
  e.target.productName.value = "";
  e.target.UnitsInStock.value = "";
  myContainer.current.value = "";
  navigateToProduct("/products");
  const apiCall = false;
  console.log(newProductObject);
  props.callApi(apiCall);
  props.addProduct(newProductObject);
};


// const [products, setProducts] = useState(data);
// const [addFormData, setAddFormData] = useState({
//   productname: '',
//   description:'',
//   category:'',
//   expiryDate:'',
//   stocks:'',
// })

// const handleAddFormChange = (e) => {
//   e.preventDefault();

//   const fieldName = e.target.getAttribute('name');
//   const fieldValue = e.target.value;

//   const newFormData = {...addFormData}
//   newFormData[fieldName] = fieldValue;

//   setAddFormData(newFormData);
// };

// const handleAddFormSubmit = (e) => {
//   e.preventDefault();

//   const newProduct = {
//     id:nanoid(),
//     productname: addFormData.productname,
//     description:addFormData.description,
//     category:addFormData.category,
//     expiryDate:addFormData.expiryDate,
//     stocks:addFormData.stocks,
//   };

//   const newProducts = [...products, newProduct]
//   setProducts(newProducts)
// }


// const inputFile =useRef(null)
// const onButtonClick =() => {
//   inputFile.current.click()
// }

  return (
    <>
    <Navbar/>
      <div id='mainWrapper'>
        <div id='formWrapper'>
          <h3 className='addProHeading'>Add Product</h3>
          <form
            id='addProductForm'
            onSubmit={(e) => {
              onSubmitHandler(e);
            }}
          >
            <div className='fieldWrapper'>
              <div className='inputFieldWrapper'>
                <label htmlfor="productName">Product Name</label>
                <input
                  ref={myContainer}
                  type="text"
                  name="productName"
                  id="productName"
                  className='productName'
                />
                <label htmlfor="productDescription">Description</label>
                <textarea
                  ref={myContainer}
                  type="text"
                  name="productDescription"
                  id="productDescription"
                  rows={5}
                  cols={50}
                  className='productDescription'
                />
                <label htmlfor="productCategory">Category</label>
                <select
                  name="productCategory"
                  id="productCategory"
                  className='productCategory'
                >
                  <option>Select cetegory</option>
                  <option value="New Arrival">New Arrival</option>
                  <option value="Most Popular">Most Popular</option>
                  <option value="Trending">Trending</option>
                </select>

                <div className='dateWrapper'>
                  <div className='expiryWrapper'>
                    <label htmlfor="expireDate">Expire Date</label>
                    <input
                      type="date"
                      name="expireDate"
                      id="expireDate"
                      className='expireDate'
                    />
                  </div>
                  <div className='stockWrapper'>
                    <label htmlfor="UnitsInStock">Units In Stock</label>
                    <input
                      type="text"
                      name="UnitsInStock"
                      id="UnitsInStock"
                      className='UnitsInStock'
                    />
                  </div>
                </div>
              </div>

              <div className='productImageWrapper'>
                <div id='fileUploadWrapper'>
                  <div
                    className='uploadFileImage'
                    onClick={() => {
                      getFileFromIcon();
                    }}
                  >
                   <i class="fa fa-cloud-upload" style={{fontSize:'28px'}} ></i>
                  </div>
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/bmp,image/svg,image/webp,"
                    id="inputFile"
                    className='inputFile'
                    ref={myContainer}
                  />
                </div>
                <button
                  id='fileUploadBtn'
                  onClick={(e) => {
                    getFileFromBtn(e);
                  }}
                >
                  UPLOAD PRODUCT IMAGE
                </button>
              </div>
            </div>

            <button id='addProductBtn' type="submit" value="Submit">
              ADD PRODUCT NOW
            </button>
          </form>
        </div>
      </div>
    {/* <Navbar/>
   <div className='whole'>
   <h4 style={{marginLeft:'20px', marginBottom:'100px'}}>Add Product</h4>
   <div className='addProduct'>
        <form action="" onSubmit={ (e) => {handleAddFormSubmit(e)}}> 
      <div className='productAdd'>
          <label htmlfor="productName">Product Name</label>
          <input type="text" name='productName'
          
           ref = {myProduct}
           required />
          <br />
          <label htmlfor="productDescription">Description</label>
          <textarea name="productDescription" 
          
          ref = {myProduct}
          required id="" cols="46" rows="5"></textarea>
          <br />
          <label htmlfor="productCategory">Category</label>
           <select className='select' required 
          
           ref = {myProduct} 
           name='productCategory'>
          <option value="accouts">Select Category</option>
        <option value="New Arrival">  New Arrival</option>
        <option value="Most Popular">Most Popular</option>
        <option value="Trending">Trending</option>
   </select> 
   </div>
   <div className='dates'>
       <div className=''>
       <label className='stocklabel' htmlfor="expireDate">Expire Date</label>
        <input className='ddate' 
          
        type="date" required  name='expireDate'/>
       </div>
        <div>
        <label className='stocklabel' htmlfor="unitStock">Units in Stocks</label>
        <input type="text" required 
       
        className='stocks' name="unitStock" id="" /> 
        </div>
      </div> 
      <div className='imageAdd'>
         <div className='imgCloud'>
        <div className='icons' >
        <input  type="file"  ref = {myProduct} 
        onClick = {() => {cloudFile()}}
        accept='image/jpeg, image/png, image/bmp, image/svg, image/webo' required name='image'  style={{display:'none'}}   />
          <i class="fa fa-cloud-upload" style={{fontSize:'28px'}} ></i></div>
         </div>
         <br />
        <button className='upBtn' onClick={(e) => {imgUpload(e)}}>UPLOAD PRODUCT IMAGE</button>
      </div>
      <button type='submit' className='addBtn' >ADD PRODUCT NOW</button>   
        </form>
      </div>     
   </div>
  
     */}

      {/* onClick={onButtonClick}  ref={inputFile}  onChange={handleAddFormChange} */}
      
    <Footer/>
    </>
  )
}
const mapStateToProps = (props) =>({})

const mapDispatchToProps =(dispatch) => ({
  addProduct: (newProduct) => {
 dispatch(addNewProduct(newProduct))
  },
  callApi:(apiCall) => {
    dispatch(modifyCallApi(apiCall))
  }
});



export default connect(mapStateToProps, mapDispatchToProps) (AddProduct)