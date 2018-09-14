import './App.css'
import React, { Component } from 'react'
import Routes from './Routes'
import NavBar from './components/UI/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes />
      </div>
    )
  }
}

export default App
