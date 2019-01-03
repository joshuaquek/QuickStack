// @flow
import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default ({children, title = 'This is the default title'}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='shortcut icon' type='image/png' href='/static/favicon.ico' />
    </Head>
    <header>
      <nav>
        <Link prefetch href='/'><a>Home</a></Link>
        -----
        <Link prefetch href='/page1?hmmmWhereIsThisRenderingFrom=The Frontend &someCoolId= 99' as='/example_1/yoyo/42'><a>ExamplePageOneHere</a></Link>
        -----
        <Link prefetch href='/page2' as='/examplePage2'><a>ExamplePageTwoHere</a></Link>
      </nav>
    </header>
    {children}
    <footer>
      This is a layout footer
    </footer>
  </div>
)
