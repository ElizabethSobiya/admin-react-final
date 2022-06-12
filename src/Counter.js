import React, { useState } from 'react'
import React, {Component} from "react"


function Counter() {

    const[count, setCount] = useState(0)


  return (
    <div>
        <button onClick={()=> setCount(count+1)}> Increase {count}
        </button>
        
    </div>
  )
}



 class Counter extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }

        
      }
  
      increment =() =>{
        this.setState ({
          count: this.state.count +1
        })
      }

     
      decrement = () => {
        this.setState({
          count : this.state.count -1
        })
      }
  render() {
    return (
      <>
      <h1>Counter</h1>
      <h2>count{this.state.count}</h2>
          <button onClick={this.increment}>
          Increase  
          </button>
          <button onClick={this.decrement}>
            Decrease 
          </button >
      </>
    )
  }
}

export default Counter