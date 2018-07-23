import React, { Component } from 'react'
import './PaletteDemo.css'

class PaletteDemo extends Component {
  render () {
    return (
      <div className="paletteDemo" {...this.props}>
        <div>
          <i className="primary-dark">
            <code>$primary-dark</code>

            <div />
          </i>

          <i className="primary">
            <code>$primary</code>

            <div />
          </i>

          <i className="primary-light">
            <code>$primary-light</code>

            <div />
          </i>
        </div>

        <div>
          <i className="secondary-dark">
            <code>$secondary-dark</code>

            <div />
          </i>

          <i className="secondary">
            <code>$secondary</code>

            <div />
          </i>

          <i className="secondary-light">
            <code>$secondary-light</code>

            <div />
          </i>
        </div>

        <div>
          <i className="white">
            <code>$white</code>

            <div />
          </i>

          <i className="black">
            <code>$black</code>

            <div />
          </i>
        </div>
      </div>
    )
  }
}

export default PaletteDemo
