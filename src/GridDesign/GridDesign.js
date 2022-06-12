import React from 'react';
import "./GridDesign.css"
import axios from 'axios';
import Footer from './Footer'
import Header from './Header';
import FilterWrapper from './FilterWrapper';
import Product from './Product';
// import Product from './Product';



// function GridDesign(props){
//     return(
//         <div>
//             <Header/>
//             {/* <Product/>
//              <Footer/> */}
//         </div>
//     )
// }


class GridDesign extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <FilterWrapper/>
                <Product/>
                <Footer/>
            </div>
        )
    }
}


export default GridDesign;