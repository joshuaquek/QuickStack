import { view } from 'react-easy-state'
import { Component } from 'react'
import Link from 'next/link'
import './style.css'

class Element extends Component {
  render () {
    const { className = '', themeType = 'primary', title = 'Not Set', footerText = 'Show More', showFooter = false } = this.props // Set default props
    return (
      <div className={`box box-${themeType}`}>
        <div className='box-header with-border'>
          <h3 className='box-title'>{title}</h3>

          <div className='box-tools pull-right'>
            <button type='button' className='btn btn-box-tool' data-widget='collapse'><i className='fa fa-minus' />
            </button>
            <button type='button' className='btn btn-box-tool' data-widget='remove'><i className='fa fa-times' />
            </button>
          </div>
        </div>

        <div className={`box-body no-padding ${className}`}>
          {this.props.children}
        </div>

        <div className={`box-footer text-center ${showFooter ? '' : 'ibe-hide'}`}>
          <a href='#' className='uppercase'>{footerText}</a>
        </div>

      </div>
    )
  }
}

export default view(Element)
