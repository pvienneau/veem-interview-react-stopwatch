import React, { Component } from 'react'
import IconsDemo from 'components/IconsDemo/IconsDemo.jsx'
import PaletteDemo from 'components/PaletteDemo/PaletteDemo.jsx'
import './Hints.css'

class Hints extends Component {
  render () {
    return (
      <div className="hints">
        <IconsDemo />

        <PaletteDemo />
      </div>
    )
  }
}

export default Hints
