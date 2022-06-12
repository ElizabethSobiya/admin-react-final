// function Product(props){
//     return(
//         <div className="footercontent">
//               <div className="edyoda">
//                     <h3>EDYODA</h3>
//                     <p>About Us</p>
//                   <p>Contact Us</p>
//                   <p>Terms of Use</p>
//                   <p>Privacy Policy</p>
//                 </div>
//                 <div className="resources">
//                     <h3>RESOURCES</h3>
//                   <p>Learning Path</p>
//                   <p>Courses</p>
//                   <p>Learning Videos</p>
//                   <p>Educatores</p>
//                   <p>Edyoda Stories</p>
//                   <p>University</p>
//                 </div>
//                 <div className="enterprises">
//                     <h3>FOR ENTERPRISES</h3>
//    <p>Train Your Employees</p>
//       <h3>QUICK LINKS</h3>
//     <p>Learn and Earn</p>
//    <p>Become a Learning-Enabler</p>
//    <p>Request to New Topic</p>          
//      <p>Certification</p>
//                 </div>
//                 <div className="connect">
//                 <h3>CONNECT</h3>
//                     <p>2nd Floor #188, Survey No. - 123/1,
//           <br//>Incubes Building Next to McDonalds,
//           <br//>ITPL Main Rd, br/ookefield,
//           Bengaluru, <br//>Karnataka-560037,
//           India</p>
//           <p className="emailfoot"> <i className="fas fa-envelope"></i> hello@edyoda.com</p>
//           <p className="iconsfoot"> <i className="fas fa-map-marker-alt"></i> <i className="fab fa-twitter"></i> <i className="fab fa-facebook-f"></i> <i className="fab fa-linkedin-in"></i> </p>
//          <br//>
//          <br//>
//          © 2021<br//>
//           zekeLabs Technologies Private Limited
//                    </div>
//               </div>

import React, { Component } from "react";

    
            
//     )
// }

export class Footer extends Component{
    render(){
        return(
            <div class="footercontent">
                <div class="edyoda">
                    <h3>EDYODA</h3>
                    <p>About Us</p>
                  <p>Contact Us</p>
                  <p>Terms of Use</p>
                  <p>Privacy Policy</p>
                </div>
                <div class="resources">
                    <h3>RESOURCES</h3>
                  <p>Learning Path</p>
                  <p>Courses</p>
                  <p>Learning Videos</p>
                  <p>Educatores</p>
                  <p>Edyoda Stories</p>
                  <p>University</p>
                </div>
                <div class="enterprises">
                    <h3>FOR ENTERPRISES</h3>
                      <p>Train Your Employees</p>
                      <h3>QUICK LINKS</h3>
                     <p>Learn and Earn</p>
                     <p>Become a Learning-Enabler</p>
                     <p>Request to New Topic</p>          
                    <p>Certification</p>
                </div>
                <div class="connect">
                    <h3>CONNECT</h3>
                    <p>2nd Floor #188, Survey No. - 123/1,
                      <br/>Incubes Building Next to McDonalds,
                      <br/>ITPL Main Rd, br/ookefield,
                     Bengaluru, <br/>Karnataka-560037,
                      India</p>
                       <p class="emailfoot"> <i class="fas fa-envelope"></i> hello@edyoda.com</p>
                     <p class="iconsfoot"> <i class="fas fa-map-marker-alt"></i> <i class="fab fa-twitter"></i> <i class="fab fa-facebook-f"></i> <i class="fab fa-linkedin-in"></i> </p>
         <br/>
         <br/>
         © 2021<br/>
          zekeLabs Technologies Private Limited
    
            </div>
            </div>
        )
    }
}

export default Footer