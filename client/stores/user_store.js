import { store } from 'react-easy-state'

const user = store({ name: 'Bob', age: 20 })
const onChangeName = ev => (user.name = ev.target.value)
const onChangeAge = ev => (user.age = parseInt(ev.target.value))

export { user, onChangeName, onChangeAge }
