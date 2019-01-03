import NotFound from '../../components/NotFound'

export const test = () => {
  return 5
}

export default NotFound // It is a controller, hence it should not be accessible as a NextJS Page
