import React, { Component } from 'react'
import './IconsDemo.css'

class IconsDemo extends Component {
  render () {
    return (
      <div className="iconsDemo" {...this.props}>
        <i className="fa fa-play"></i>

        <i className="fa fa-stop"></i>

        <i className="fa fa-pause"></i>

        <i className="fa fa-undo"></i>
      </div>
    )
  }
}

export default IconsDemo
