import { store } from 'react-easy-state'
import axios from 'axios'

const user = store({ name: 'Bob', age: 20, gender: 'male' })

const onChangeName = async (event) => {
  try {
    user.name = event.target.value
    const res = await axios.get(`https://api.genderize.io/?name=${event.target.value}`)
    user.gender = res.data.gender || 'none'
  } catch (error) {
    console.log(error)
  }
}

const onChangeAge = ev => (user.age = parseInt(ev.target.value))

export { user, onChangeName, onChangeAge }
