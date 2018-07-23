import React, { Component } from 'react'
import classNames from 'classnames'
import './Button.css'

class Button extends Component {
  render () {
    const { children, primary, secondary, large, disabled, ...rest } = this.props

    const buttonClassNames = classNames('button', {
      primary,
      secondary,
      large,
      disabled,
    })

    return (
      <button
        {...rest}
        className={buttonClassNames}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }
}

export default Button
