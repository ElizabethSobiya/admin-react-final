import React from 'react'
import {connect} from 'react-redux'

function App(props) {
  return (
    <div>App component</div>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default  connect(mapStateToProps)(App)