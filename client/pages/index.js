import { view } from 'react-easy-state'
import axios from 'axios'
import Layout from '../components/layout'
import { user, onChangeName, onChangeAge } from '../stores/user_store'
import Form from '../components/form'

Page.getInitialProps = async ({ req }) => {
  const res = await axios.get('http://httpbin.org/ip')
  return { myIpAddress: res.data['origin'] }
}

function Page ({ myIpAddress }) {
  return (
    <div>
      <Layout>
        <center>
          <h1>This is an example page </h1>

          <h2>React Easy State - Global State Management Demo:</h2>
          <input value={user.name} onChange={onChangeName} />
          <input value={user.age} onChange={onChangeAge} />
          <br /><br />
          <div>My name is {user.name}, my age is {user.age} and my gender is {user.gender}!</div><br /><br />

          <h2>Initial API Data Fetch when component loads Demo:</h2>
          <div> My IP Address according to HttpBin: { myIpAddress }</div>
        </center>
      </Layout>
      <Form>
        <h1>This is a separate component</h1>
      </Form>
    </div>
  )
}

export default view(Page)
