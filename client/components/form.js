import { view } from 'react-easy-state'
import { user, onChangeName, onChangeAge } from '../stores/user_store'

const Form = (props) => (
  <div id='myForm'>
    <center>
      {props.children}
      <h3>Name: </h3>
      <input value={user.name} onChange={onChangeName} />
      <h3>Age:</h3>
      <input value={user.age} onChange={onChangeAge} />
    </center>
    <style jsx>
      {`
        #myForm { 
          background-color: yellow;
        }
      `}
    </style>
  </div>
)

// Page.getInitialProps = async ({ req }) => {
//   const res = await axios.get('https://api.github.com/repos/zeit/next.js')
//   return { stargazers_count: res.data.stargazers_count }
// }

export default view(Form)
