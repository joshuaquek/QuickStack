import Link from 'next/link'
import Layout from '../components/_example/layout'
export default (props) => (
  <div>
    <Layout>
      <center>
        <h1>Server is running!!</h1>
        <p>{JSON.stringify(props)}</p>
      </center>
    </Layout>
  </div>
)
