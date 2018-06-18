import { view, store } from 'react-easy-state'
import axios from 'axios'
import Layout from '../components/_example/layout'

const user = store({ name: 'Bob' })
const onChange = ev => (user.name = ev.target.value)

const Page = (props) => (
  <div>
    <Layout>
      <center>
        <h1>This is an example page.</h1>
        <p>{JSON.stringify(props)}</p><br /><br />

        <h2>Easy State Management Demo:</h2>
        <input value={user.name} onChange={onChange} />
        <div>Hello {user.name}!</div><br /><br />

        <h2>Initial Data Fetch onComponentLoad Demo:</h2>
        <div> Next stars: { props.stars }</div>
      </center>
    </Layout>
  </div>
)

Page.getInitialProps = async ({ req }) => {
  const res = await axios.get('https://api.github.com/repos/zeit/next.js')
  return { stars: res.data.stargazers_count }
}

export default view(Page)
