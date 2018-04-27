import Layout from '../../components/layout'
import Link from 'next/link'

export default (props) => (
  <div>
    <Layout>
      <center>
        <h1>This is an example page.</h1>
        <p>{JSON.stringify(props)}</p>
      </center>
    </Layout>
  </div>
)
