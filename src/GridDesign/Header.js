import React, { Component } from 'react'

export class Header extends Component{
    render(){
        return(

            <div className="header">
            
         <div className="logo">
             <p id="logo">EDYODA</p>
             <p id="story">Stories</p>

         </div>
         <div className="explore-category">
                <p id="ec"> Explore Categories <i className="fa fa-caret-down"  id="dropdown"></i></p>
         </div>
         <button className="button">Go to main website</button>
    </div>

        )
    }
}


// function Header(props){
//     return (
//         <div className="header">
//             <h2>
//                 the app Component
//             </h2>
//         {/* <div className="logo">
//             <p id="logo">EDYODA</p>
//             <p id="story">Stories</p>

//         </div>
//         <div className="explore-category">
//                <p id="ec"> Explore Categories <i className="fa fa-caret-down"  id="dropdown"></i></p>
//         </div>
//         <button className="button">Go to main website</button> */}
//     </div>
//     )
// }


export default Header

