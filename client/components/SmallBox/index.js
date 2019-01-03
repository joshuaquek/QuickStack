import { view } from 'react-easy-state'
import { Component } from 'react'
import Link from 'next/link'
import './style.css'

/*
..... Some Notes .....
- Wrapping the component with <a></a> ensures that the user sees a white glove cursor when hovering over it.
......................
*/

class Element extends Component {
  render () {
    const { linkHref = '#', boxColor = 'green', title = 'Not Set', description = 'Not Set', ionicIconName = 'ion-load-a' } = this.props // Set default props
    return (
      <Link prefetch href={linkHref}>
        <a>
          <div className={`small-box bg-${boxColor}`}>
            <div className='inner'>
              <h3>{ title }</h3>
              <p>{ description }</p>
            </div>
            <div className='icon'><i className={`ion ${ionicIconName}`} /></div>
            <a href='#' className='small-box-footer'>Click this box to begin <i className='fa fa-arrow-circle-right' /></a>
          </div>
        </a>
      </Link>
    )
  }
}

export default view(Element)
