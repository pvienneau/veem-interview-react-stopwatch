import React, { Component } from 'react'
import Stopwatch from 'components/Stopwatch/Stopwatch.jsx'
import Hints from 'components/Hints/Hints.jsx'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stopwatch />

        <Hints />
      </div>
    )
  }
}

export default App
