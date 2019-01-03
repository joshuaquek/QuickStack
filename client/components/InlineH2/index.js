import { view } from 'react-easy-state'
import { Component } from 'react'
import './style.css'

class Element extends Component {
  render () {
    return (
      <h2 className='inlineh2-style'>
        { this.props.children }
      </h2>
    )
  }
}

export default view(Element)
