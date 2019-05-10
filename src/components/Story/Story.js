import React, { Component } from 'react'
import './story.css'

export default class Story extends Component {
  render() {
    const {storyTitle,isbn} = this.props
   
    return (
      <div>
        <section className="story">
        <h2>{storyTitle}</h2>
        <h3>ISBN: {isbn}</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        </section>
      </div>
    )
  }
}
