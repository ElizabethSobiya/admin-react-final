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