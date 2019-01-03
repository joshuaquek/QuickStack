import { view, store } from 'react-easy-state'
import { Component } from 'react'
import './style.css'

let state = store({
  myMessage: 'Hello World, my name is'
})

class Element extends Component {
  componentDidMount () {
    // Logic to run just before component renders
  }

  render () {
    const { firstNameFromProps = 'John', lastNameFromProps = 'Doe' } = this.props // Set default props
    return (
      <div>
        {`${state.myMessage} ${firstNameFromProps} ${lastNameFromProps}`}
      </div>
    )
  }

}

export default view(Element)
