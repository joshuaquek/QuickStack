// @flow
import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: React.Node,
  title?: string
}

export default ({children, title = 'This is the default title'}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link prefetch href='/'><a>Home</a></Link> |&nbsp;
        <Link prefetch href='/_example/page1' as='examplePage1'><a>ExamplePageOneHere</a></Link> |&nbsp;
        <Link prefetch href='/_example/page2' as='examplePage2'><a>ExamplePageTwoHere</a></Link>
      </nav>
    </header>
    {children}
    <footer>
      This is a layout footer
    </footer>
  </div>
)
