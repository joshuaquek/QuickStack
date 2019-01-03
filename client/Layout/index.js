import { view } from 'react-easy-state'
import Head from './Head'
import Menu from './Menu'
import './style.css'

function Element ({ children }) {
  return (
    <div>
      <Head />
      <Menu>
        <div className='container-fluid full-height grey-background side-and-top-gutters'>
          { children }
        </div>
      </Menu>
    </div>
  )
}

export default view(Element)
