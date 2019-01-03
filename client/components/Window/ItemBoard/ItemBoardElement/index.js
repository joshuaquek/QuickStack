import { view } from 'react-easy-state'
import { Component } from 'react'
import './style.css'

class Element extends Component {
  render () {
    const { imageURL = '#', imgAltText = 'No image found', title = 'Not Set', description = 'Not Set' } = this.props // Set default props
    return (
      <li>
        <img src={imageURL} alt={imgAltText} />
        <a class='users-list-name' href='#'>{title}</a>
        <span class='users-list-date'>{description}</span>
      </li>
    )
  }
}

export default view(Element)
