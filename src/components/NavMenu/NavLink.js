import React, { Component } from 'react'
import './NavLink.css'

export default class NavLink extends Component {
  render() {
      const {info} = this.props
    return (
      
        <a href={info.url} className="main-link">{info.label}</a>
      
    )
  }
}
