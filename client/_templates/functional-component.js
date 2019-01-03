import { view, store } from 'react-easy-state'
import './style.css'

const state = store({
  myMessage: 'Hello World'
})

Element.defaultProps = {
  myValue: 1
}

function Element ({ myValue }) {
  return (
    <div>
      {state.myMessage}
    </div>
  )
}

export default view(Element)
