import { Component } from 'react'
import Router from 'next/router'

class NotFound extends Component {
  static async getInitialProps ({ res }) {
    if (res) {
      res.writeHead(302, { Location: '/not_found' })
      res.end()
    } else {
      Router.push('/not_found')
    }
    return {}
  }
}

export default NotFound
