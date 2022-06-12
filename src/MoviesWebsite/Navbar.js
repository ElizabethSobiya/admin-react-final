import React, {useEffect, useState}from 'react'
import axios from 'axios' 
import HomePage from './HomePage'
import styles from './Movies.css'

function Navbar() {

    // const [APIData, setAPIData] = useState([])

    const [searchInput , setSearchInput] = useState ('')

    const [movies, setMovies] = useState ([])

  const [searchItems, setSearchItem] = useState ([])

    useEffect(() => {
       axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716')
       .then( (res) => { setMovies(res.data.results)})
    },[])

     
  //   const searchItems = (searchValue) => {
  //         setSearchInput(searchValue)
  //   }
  // console.log(searchValue);
    

    // useEffect = ( () => {
    //     axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716")
    //     .then((response) => {
    //         setAPIData(response.data.results)
    //         // console.log(response);
    //     })
    // },[]) 

    useEffect( () => {
 if (searchInput == ""){
   setSearchItem ([])
 }else{
     axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchInput}&api_key=cfe422613b250f702980a3bbf9e90716`)
     .then( (response) =>{
       console.log(response.data.results);
      setSearchItem(response.data.results)
     })
    }
    },[searchInput]) 
     
  return (
    <>
    <div>
      <h1>Ticket Avail</h1>
        <input className='input' type="search" value= {searchInput} onChange = {(e) => setSearchInput(e.target.value)}  placeholder="Search..."  />
    </div>
    <h1> popular movies </h1>
    
    {searchItems.length == 0 && searchInput == "" ? <div className=  'movieWrapper'>
        
        {movies.map ((movie, i) => {
            return (

              <HomePage
              poster_path={movie.poster_path}
              title ={movie.title}
              />

              // <div className= 'movieData'>
              //     <img  className='moviePic' src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt="" />
                 
              //     <h2 className='movieTitle'>{movie.title}</h2>
              // </div>
            )
       
            
        })}

        </div> : <div className=  'movieWrapper'>
        
        {searchItems.map ((movie, i) => {
            return (
              <HomePage
              poster_path={movie.poster_path}
              title ={movie.title}
              />
            )
       
            
        })}

        </div> }

    </>
  )
}

export default Navbar