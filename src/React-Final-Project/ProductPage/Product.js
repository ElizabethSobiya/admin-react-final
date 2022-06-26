import React, { useRef } from 'react'
// import ProductTable from './ProductTable';
// import {products} from '../Data'
import { useState, useEffect} from 'react'
import AddProduct from '../AddProduct';
import {Link, useNavigate } from 'react-router-dom';
// import data from '../mock.data.json'
import { connect } from 'react-redux'
import { changeCategoryList } from '../Redux/action'
import { changeProductList } from '../Redux/action'
import { modifyCallApi } from '../Redux/action'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { addNewCategory }  from '../Redux/action'
import { adminData} from '../Redux/action'
import './ProductPage.css'

function Product(data) {

  const prodData = data.data;
  // console.log(prodData)
  const category = useRef(null)

  let addNavigate = useNavigate();
  
 const arr = data.data.reducer.productPage.products;
 const arr1 = arr.map((item) => { 
  return {
    ...item,
    checked:false,
  }
});

console.log(arr1)
const multy = [];

const [categories, setCategories] = useState([])
const [products, setProducts] = useState([])
const [modal, setModal] = useState(false)

// console.log(products)
// console.log(data.data.reducer.accountPage)

useEffect (() => {
  if(prodData.reducer.productPage.length !== 0){
    setCategories(data.data.reducer.productPage.categories);
    setProducts(arr1)
  }
}, [prodData])

const deleteProductsVal = (name) => {
  const deleteData = [];
  products.map((item) => {
    if(item.name !== name){
      deleteData.push(item)
    }
  })
  data.deleteProduct(deleteData)
};

const deleteCategoryVal = (category)=>{
  const deletedCategory = [];
  categories.map((item) => {
    if(category !== item ){
      deletedCategory.push(item)
    }
  });
  data.deleteCategory(deletedCategory)
}

const handleChange = (e, names) => {
  let arr3 = products.map((item) => 
  item.name === e.target.name ? {...item, checked: e.target.checked} : {...item }
  );
  setProducts(arr3)
}

const handleClick = () => {
const addedList = products.filter((item) => !item.checked && item.name);

data.deleteProduct(addedList)
}

const getCategory = (e) => {
  e.preventDefault();

  let newCategory = e.target.categoryName.value.toString();
  console.log(newCategory)

  e.target.categoryName.value = '';
  const apiCall = false;

  setModal(!modal);
  data.callApi(apiCall);
  data.addCategory(newCategory);
}

//   const [products, setProducts] = useState(data)
// const handleDeleteClick = (productId) => {
//   const newProducts = [...products]

//   const index = products.findIndex((product) => product.id === productId)
//   newProducts.splice(index, 1);
//   setProducts(newProducts)
// }

// const [checked, setChecked] = useState(false);
// const handleCheck =() => {
//  setChecked(!checked)
// }
  return (
   <>
   <div className="product">
   <div className="table">
   <table style={{padding:'1px'}}>
       <tbody>
       <tr>
            <th></th>
            <th>PRODUCT NAME</th>
            <th>UNIT SOLD</th>
            <th>IN STOCK</th>
            <th>EXPIRE DATE</th>
            <th></th>
        </tr>
       </tbody>
  <tbody >
    {products.map((item, i) => {
      return(
    <tr className='ractive' key ={i} >
    <td><input type="checkbox" className='checkboxRound' 
    checked ={item.checked} name = {item.name}
     onChange={(e) => {handleChange(e, item.name)}} /></td>
    <td >{item.description.slice(0,17)}</td>
    <td >{item.unitSold}</td>
    <td >{item.stock}</td>
    <td >{item.expireDate}</td>
    <td ><div  className='icons' ><i className='fa fa-trash' onClick={()=>deleteProductsVal(item.name)}  style={{fontSize:'18px', fontWeight:'200'}}></i>
    </div>
    {/* <span>{product.name}</span> */}
    </td>
</tr>)
})
}
  </tbody>

        {/* onClick={handleDeleteClick} {products.map((product) =>(
    <ProductTable key = {product.id} prdt ={product}/>
   ))} */}
    </table>

   </div>
  
    <Link to='/addProduct'><button className='productBtn'
    onClick={() =>addNavigate('/addProduct')}>ADD NEW PRODUCT</button></Link>
    <button className='productBtn'
    onClick={() => handleClick(multy)}>DELETE SELECTED PRODUCTS</button>
   </div>
    {/* category wrapper */}
   <div className="category">
   <h4 style={{margin:'40px 0px 10px 30px'}}>Product Categories</h4>
   <div className="tableCat">
   <table style={{width:'280px', padding:'10px'}}>  
   <tbody>
   {categories.map((item, i) => {
    return(
      <tr key={i}> 
    <td>{item}</td>
    <td><div className='icons' ><i className='fa fa-trash' onClick={() => {deleteCategoryVal(item)}} 
    style={{fontSize:'20px'}}></i></div></td>
    </tr>
   )
  })}
  </tbody>
    </table>
   </div>
    <button className='categoryBtn' onClick={()=> setModal(true)}>ADD CATEGORY {''}</button>
   </div>

   <Modal
          size="lg"
          // animation={false}
          isOpen={modal}
          // transition={false}
          toggle={() => setModal(!modal)}
          className='formWrapper'>
          <ModalHeader
            className= 'categoryHeadings'
            toggle={() => setModal(!modal)}>
            Add category name here
          </ModalHeader>

          <ModalBody className='addCategoryFormWrapper'>
            <form
              className='addCategoryForm'
              ref={category}
              onSubmit={(e) => {
                getCategory(e);
              }}>
              <label htmlFor="categoryName">Category Name</label>
              <input
                ref={category}
                type="text"
                name="categoryName"
                id="categoryName"
                className='categoryName'/>
              <button className='submitBtn' type="submit" value="submit">
                Submit
              </button>
            </form>
          </ModalBody>
          {/* <ModalFooter className={styles.modalfooter}></ModalFooter> */}
        </Modal>
   </>
  )
}
const mapStateToProps = (props) => ({
  data: props,
});

const mapDispatchToProps = (dispatch) => ({
   addData: () =>{
    adminData();
   },
  deleteProduct: (name) => {
    dispatch(changeProductList(name));
  },
  deleteCategory: (name) => {
    dispatch(changeCategoryList(name));
  },
  callApi: (apiCall) => {
    dispatch(modifyCallApi(apiCall));
  },
  addCategory: (name) => {
    dispatch(addNewCategory(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
