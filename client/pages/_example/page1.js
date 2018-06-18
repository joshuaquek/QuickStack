import Layout from '../../components/_example/layout'
// import Link from 'next/link'

export default (props) => (
  <div>
    <Layout>
      <center>
        <h1>This renders from {props.url.query.hmmmWhereIsThisRenderingFrom} with id of {props.url.query.someCoolId}</h1>
      </center>
    </Layout>
  </div>
)
