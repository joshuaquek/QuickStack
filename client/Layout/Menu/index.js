import { view, store } from 'react-easy-state'
import { Component } from 'react'
import { scaleRotate as BurgerMenu } from 'react-burger-menu'
import './style.css'

class Menu extends Component {
  render () {
    return (
      <div id='outer-container'>
        <BurgerMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} >
          <a id='home' className='menu-item' href='/'>
            <i className='fa fa-home' />
            <span className='bm-space-after-icon'>Home</span>
          </a>
          <a id='home' className='menu-item' href='/'>
            <i className='fa fa-question' />
            <span className='bm-space-after-icon'>Help</span>
          </a>
          <a id='home' className='menu-item' href='/'>
            <i className='fa fa-user' />
            <span className='bm-space-after-icon'>User Settings</span>
          </a>
        </BurgerMenu>
        <main id='page-wrap'>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default view(Menu)
