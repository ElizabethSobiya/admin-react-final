import React, { Component } from 'react'


export class Product extends Component{
    render(){
        return(
            <div className="cards">
            <div className="card1">
                <img  className="pic"
                src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png" width= "295px" alt="machine-learning"/>
                <div className="content-wrapper">
                    <h3 className="cardhead">Introduction To A Machine Learning Online Course</h3>
                    <div className="authorwrapper"><span className="author-name"> EdYoda  </span> <span className="date">| 23 Aug 2019 </span></div>
                <p className="details-wrapper">We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a...</p>
                </div>
            </div>
            <div className="card1">
                <img className="pic" 
                src="https://edyoda.s3.amazonaws.com/media/blog-images/5.png" width= "295px" alt="cyber"/>
                <div className="content-wrapper">
                    <h3 className="cardhead">Breaking the Myths around Cybersecurity</h3>
                <div className="authorwrapper"><span className="author-name"> EdYoda  </span> <span className="date">| 26 Aug 2019 </span></div>
                <p className="details-wrapper">As the dependency on online platforms is increasing daily, cybersecurity is becoming an important concern for all companies today. The number of cyberattacks....</p>
                </div>
            </div>
            <div className="card1">
                <img className="pic" 
                src="https://edyoda.s3.amazonaws.com/media/blog-images/7.png" width= "295px" alt="data-backup"/>
                <div className="content-wrapper">
                    <h3 className="cardhead">Importance of Data Backup and Recovery in the IT industry</h3>
                    <div className="authorwrapper"><span className="author-name"> EdYoda  </span> <span className="date">| 26 Aug 2019 </span></div>
                <p className="details-wrapper">A business must always introspect the areas where they lack in order to bring about a positive change in the work environment.....</p>
                </div>
            </div>
            <div className="card2">
                <img  className="pic"
                src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png" width= "295px" alt="machine-learning"/>
                <div className="content-wrapper">
                    <h3 className="cardhead">LAMP Stack Vs MEAN stack: Choosing the right platform for your web application development</h3>
                    <div className="authorwrapper"><span className="author-name"> EdYoda  </span> <span className="date">| 26 Aug 2019 </span></div>
                <p className="details-wrapper">In today’s dynamic world, rapid web application development with a smooth user interface that...</p>
                </div>
            </div>
            <div className="card2">
                <img className="pic" 
                src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png" width= "295px" alt="cyber"/>
                <div className="content-wrapper">
                    <h3 className="cardhead">Challenges of Machine Learning in Big Data Analytics</h3>
                <div className="authorwrapper"><span className="author-name"> EdYoda  </span> <span className="date">| 21 Aug 2019 </span></div>
                <p className="details-wrapper">Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform...</p>
                </div>
            </div>
            <div className="card2">
                <img className="pic" 
                src="https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png" width= "295px" alt="data-backup"/>
                <div className="content-wrapper">
                    <h3 className="cardhead">What is Web Scraping?</h3>
                    <div className="authorwrapper"><span className="author-name"> Zac Clancy   </span> <span className="date">| 24 Sep 2019 </span></div>
                <p className="details-wrapper">Simply put, web scraping is one of the tools developers use to gather and analyze information from the Internet. Some websites and platforms offer application programming interfaces (APIs)...</p>
                </div>
            </div>
        </div>
        )
    }
}

{/* {/* // import ProductData from "./ProductData";


// function Product(props){
//     return( */}
//         <div>
//             <h2>app Component</h2>
//         </div>
//     )
// } */}


export default Product