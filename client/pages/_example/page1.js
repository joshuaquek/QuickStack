import Layout from '../../components/_example/layout'
import Link from 'next/link'

export default (props) => (
  <div>
    <Layout>
      <center>
        <h1>EXAMPLE_PAGE_ONE</h1>
        <p>{JSON.stringify(props)}</p>
      </center>
    </Layout>
  </div>
)
