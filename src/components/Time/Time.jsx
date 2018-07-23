import React, { Component } from 'react'
import './Time.css'

class Time extends Component {
  doubleDigit = (num = '') => {
    return `00${num}`.substr(-2);
  }

  formatTime = () => {
    const { seconds: time } = this.props

    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);

    return `${this.doubleDigit(hours)}:${this.doubleDigit(minutes)}:${this.doubleDigit(seconds)}`
  }

  render () {
    const { lapCount } = this.props

    const hasLapCount = lapCount !== undefined

    return (
      <div className="time">
        <label>
          {this.formatTime()}
        </label>

        {
          hasLapCount && (
            <sup className="lapCount">
              {lapCount}
            </sup>
          )
        }
      </div>
    )
  }
}

export default Time
