import React, { Component } from 'react'
import Clock from 'components/Clock/Clock.jsx'
import './Stopwatch.css'

class Stopwatch extends Component {
  render () {
    return (
      <div className="stopwatch">
        <Clock />
      </div>
    )
  }
}

export default Stopwatch
