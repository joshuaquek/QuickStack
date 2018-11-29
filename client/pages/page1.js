import Layout from '../components/layout'
import { withRouter } from 'next/router'
// import Link from 'next/link'

export default withRouter(
  (props) => {
    return (<div>
      <Layout>
        <center>
          <h1>This renders from {props.router.query['render_location']} with id of {props.router.query['my_unique_id']}</h1>
        </center>
      </Layout>
    </div>
    )
  }
)
