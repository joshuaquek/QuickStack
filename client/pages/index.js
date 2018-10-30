import { view } from 'react-easy-state'
import axios from 'axios'
import Layout from '../components/layout'
import { user, onChangeName, onChangeAge } from '../stores/user_store'
import Form from '../components/form'

const Page = (props) => (
  <div>
    <Layout>
      <center>
        <h1>This is an Examples page </h1>
        <p>{JSON.stringify(props)}</p><br />

        <h2>React Easy State Store Management Demo:</h2>
        <input value={user.name} onChange={onChangeName} />
        <input value={user.age} onChange={onChangeAge} />
        <br /><br />
        <div>My name is {user.name}, my age is {user.age} and my gender is {user.gender}!</div><br /><br />

        <h2>Initial API Data Fetch when component loads Demo:</h2>
        <div> NextJS Github repo starred gazers count: { props.stargazers_count }</div>
      </center>
    </Layout>
    <Form>
      <h1>This is a separate component</h1>
    </Form>
  </div>
)

Page.getInitialProps = async ({ req }) => {
  const res = await axios.get('https://api.github.com/repos/zeit/next.js')
  return { stargazers_count: res.data.stargazers_count }
}

export default view(Page)
