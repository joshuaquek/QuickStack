import { view, store } from 'react-easy-state'
import Layout from '~/Layout'
import './style.css'
// import SmallBox from '@component/SmallBox'
import SmallBox from '~/components/SmallBox'
import InlineH2 from '~/components/InlineH2'

Page.getInitialProps = async ({ req }) => {
  return {
    'title': 'Unicorn Management Dashboard'
  }
}

function Page ({ title }) {
  return (
    <Layout>
      <InlineH2>{ title }</InlineH2>
      <span className='home-version'> v1.0.0</span>
      <hr />
      <h3 className='home-h3-title'>What would you wish to do?</h3>
      <div className='row'>
        <div className='col-md-3'>
          <SmallBox linkHref='/create_unicorns' boxColor='green' title='Create' description='Use this tool to generate unicorns' ionicIconName='ion-stats-bars' />
        </div>
        <div className='col-md-3'>
          <SmallBox linkHref='#' boxColor='teal' title='Upload' description='Upload your unicorn data' ionicIconName='ion-android-upload' />
        </div>
      </div>
      <h3 className='home-h3-title'>My Existing Unicorns</h3>
      <div className='row'>
        <div className='col-md-12'>
          <p><i>No unicorns found.</i></p>
        </div>
      </div>
    </Layout>
  )
}

export default view(Page)
