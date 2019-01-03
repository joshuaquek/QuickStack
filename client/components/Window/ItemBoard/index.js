import { view } from 'react-easy-state'
import { Component } from 'react'
import './style.css'

class Element extends Component {
  render () {
    // const {} = this.props // Set default props
    return (
      <ul class='users-list clearfix'>
        { this.props.children }
      </ul>
    )
  }
}

export default view(Element)
