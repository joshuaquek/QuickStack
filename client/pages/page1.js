import Layout from '../../components/_example/layout'
import { withRouter } from 'next/router'
// import Link from 'next/link'

export default withRouter(
  (props) => {
    return (<div>
      <Layout>
        <center>
          <h1>This renders from {props.router.query.hmmmWhereIsThisRenderingFrom} with id of {props.router.query.someCoolId}</h1>
        </center>
      </Layout>
    </div>
    )
  }
)
