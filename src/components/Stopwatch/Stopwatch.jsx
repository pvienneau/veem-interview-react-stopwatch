import React, { Component } from 'react'
import classNames from 'classnames'
import Button from 'components/Button/Button.jsx'
import Clock from 'components/Clock/Clock.jsx'
import './Stopwatch.css'

class Stopwatch extends Component {
  constructor (props) {
    super(props)

    this.state = {
      seconds: 0,
      isRunning: false,
      laps: [],
    }
  }

  incrementTime = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }))
  }

  startTime = () => {
    this.setState({
      isRunning: true,
    })

    this._timerInterval = setInterval(this.incrementTime, 1)
  }

  stopTime = () => {
    this.pauseTime()
    this.setState({
      seconds: 0,
      laps: [],
    })
  }

  pauseTime = () => {
    this.setState({
      isRunning: false,
    })

    clearInterval(this._timerInterval)
  }

  lapTime = () => {
    this.setState(prevState => ({
      laps: prevState.laps.concat(prevState.seconds),
    }))
  }

  render() {
    const { isRunning, seconds, laps } = this.state

    const playButtonClassNames = classNames('fa', {
      'fa-stop': isRunning,
      'fa-play': !isRunning,
    })

    return (
      <div className="stopwatch">
        <Clock
          seconds={seconds}
          lapCount={laps.length}
        />

        <div className="controls">
          <Button
            secondary
            onClick={this.pauseTime}
            disabled={!isRunning}
          >
            <i className="fa fa-pause"></i>
          </Button>

          <Button
            primary
            large
            onClick={isRunning ? this.stopTime : this.startTime}
          >
            <i className={playButtonClassNames}></i>
          </Button>

          <Button
            secondary
            onClick={this.lapTime}
            disabled={!isRunning}
          >
            <i className="fa fa-undo"></i>
          </Button>
        </div>
      </div>
    )
  }
}

export default Stopwatch
