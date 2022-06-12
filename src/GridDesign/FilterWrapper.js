import React, { Component } from 'react'

export class FilterWrapper extends Component{
    render(){
        return(
            <div className="color-buttons">
            <div className="latestpost">
                <p>Latest posts</p>
            </div>
            <div className="filter">
                <p>Filter by category</p>
            </div>
            <div className="buttons">
                <button className="btn">All</button>
                <button className="btn">artificial intelligence</button>
                <button className="btn">cloud computing</button>
                <button className="btn">devOps</button>
                <button className="btn">programming language</button>
                <button className="btn">mobile application development</button>
                <button className="btn">technology and tools</button>
                <button className="btn">get a job in a tech company</button>
                <button className="btn">others</button>
            </div>
            </div>
        )
        
        }
        }

        export default FilterWrapper