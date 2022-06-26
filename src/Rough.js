// import React, { Component } from 'react'
//  import styles from './Movies.css'
//  import axios from 'axios'
 
//  export class HomePage extends Component {
//   componentDidMount(){
//     axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716')
// .then((response)=>{
//     this.setState({movieData:response.data.results})

//    this.inputData = this.inputData.bind(this)
// })
// }

//    render() {
//      return (
//       <div className= 'movieData'>
//                  <img  className='moviePic' src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.state.poster_path}`} alt="" />
               
//                  <h2 className='movieTitle'>{this.state.title}</h2>
//             </div>
//      )
//    }
//  }
 
//  export default HomePage

// import React from 'react'
// import {products} from '../Data'
// // import DeleteIcon from '@mui/icons-material/Delete';
// import './ProductPage.css'
// // import {products} from '../Data'


// function ProductTable({prdt}) {
//   return (
//     <>
//      <tr>
//             <td><input type="checkbox" className='checkboxRound'/></td>
//             <td>{prdt.description.slice(0,17)}</td>
//             <td>{prdt.unitSold}</td>
//             <td>{prdt.stock}</td>
//             <td>{prdt.expireDate}</td>
//             <td><div className='icons' ><i className='fa fa-trash' style={{fontSize:'18px'}}></i></div></td>
//         </tr>

//     </>
//   )
// }

// export default ProductTable

// import React from 'react'
// // import {category} from '../Data'
// // import DeleteIcon from '@mui/icons-material/Delete';
// import './ProductPage.css'
// // import data from '../mock.data.json'


// function CatTable({cat}) {
//   return (
//    <>
//    <tr> 
//     <td>{cat.type}</td>
//     <td><div className='icons' ><i className='fa fa-trash' style={{fontSize:'20px'}}></i></div></td>
//     </tr>
//    </>
//   //  <DeleteIcon/>
//   )
// }

// export default CatTable


//  import React, { Component } from 'react'

// export class Footer extends Component {
//   render() {
//     return (
        
//     )
//   }
// }

// export default Footer


// import React, { Component } from 'react'
// import HomePage from './HomePage'
// import axios from 'axios'

// export class Navbar extends Component {
 
//     state = {movieData:[],
//     inputValue : '',
//     filterValue : []
// }

// componentDidMount(){
//     axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716')
// .then((response)=>{
//     this.setState({movieData:response.data.results})

//    this.inputData = this.inputData.bind(this)
// })
// }

// componentDidUpdate(){
//     axios.get(`https://api.themoviedb.org/3/search/movie?query=${this.state.inputValue}&api_key=cfe422613b250f702980a3bbf9e90716`)
//     .then((response) => {
//         let filterValue = response.data.results.filter((movieSearch,i)=>{
//             if (movieSearch.title.toLowecase().includes(this.state.inputValue.toLowecase())
//             )
//             return true
//         })
//         this.setState({filterValue})
//     })
// }

// inputData(e){
//     this.inputValue= e.target.value
//     this.setState({inputValue})
// }

//   render() {
//     return (
//         <div>
//                <h1>Ticket Avail</h1>
//                  <input className='input' type="search" placeholder="Search..."  onChange = {this.inputData} value = {this.state.inputValue}/>
//                  <HomePage/>
//              </div>
//     )
//   }
// }

// export default Navbar

// const navigate = useNavigate();

// const addProduct = () => {
//   navigate('./addProduct')
// }
// const [list, updateList] = useState(data);

// const handleRemoveItem = idx => {
//   // assigning the list to temp variable
//   const temp = [...list];

//   // removing the element using splice
//   temp.splice(idx, 1);

//   // updating the list
//   updateList(temp);
// }
