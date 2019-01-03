import { view } from 'react-easy-state'
import './style.css'
import { test } from './controller'
import Layout from '~/Layout'
import InlineH2 from '~/components/InlineH2'
import Window from '~/components/Window'
import ItemBoard from '~/components/Window/ItemBoard'
import ItemBoardElement from '~/components/Window/ItemBoard/ItemBoardElement'

Page.getInitialProps = async ({ req }) => {
  return {
    'unicornCount': 'Unicorn Count: ' + test()
  }
}

function Page ({ unicornCount }) {
  return (
    <Layout>
      <InlineH2>Create new Unicorn</InlineH2>
      <hr />
      <div className='row'>
        <div className='col-md-4'>
          <div className='row'>
            <div className='col-md-12'>
              <Window className='cnc-halfpage cnc-scrollable' themeType='danger' title='Add to Selected Unicorns:' footerText='Scroll down for more ⬇️' showFooter>
                <ItemBoard>
                  <ItemBoardElement imageURL='https://picsum.photos/300/300/?random' imgAltText='No image found' title='Unicorn 1' description='Created On: 15th Jan 2019' />
                  <ItemBoardElement imageURL='https://picsum.photos/300/301/?random' imgAltText='No image found' title='Unicorn 2' description='Created On: 15th Jan 2019' />
                  <ItemBoardElement imageURL='https://picsum.photos/300/302/?random' imgAltText='No image found' title='Unicorn 3' description='Created On: 15th Jan 2019' />
                  <ItemBoardElement imageURL='https://picsum.photos/300/303/?random' imgAltText='No image found' title='Unicorn 4' description='Created On: 15th Jan 2019' />
                  <ItemBoardElement imageURL='https://picsum.photos/300/304/?random' imgAltText='No image found' title='Unicorn 5' description='Created On: 15th Jan 2019' />
                  <ItemBoardElement imageURL='https://picsum.photos/300/305/?random' imgAltText='No image found' title='Unicorn 6' description='Created On: 15th Jan 2019' />
                  <ItemBoardElement imageURL='https://picsum.photos/300/306/?random' imgAltText='No image found' title='Unicorn 7' description='Created On: 15th Jan 2019' />
                  <ItemBoardElement imageURL='https://picsum.photos/300/307/?random' imgAltText='No image found' title='Unicorn 8' description='Created On: 15th Jan 2019' />
                  <ItemBoardElement imageURL='https://picsum.photos/300/308/?random' imgAltText='No image found' title='Unicorn 9' description='Created On: 15th Jan 2019' />
                  <ItemBoardElement imageURL='https://picsum.photos/300/309/?random' imgAltText='No image found' title='Unicorn 10' description='Created On: 15th Jan 2019' />
                </ItemBoard>
              </Window>
            </div>
            <div className='col-md-12'>
              <Window className='cnc-halfpage cnc-scrollable' class='cnc-halfpage' themeType='success' title='Selected Unicorns:' footerText='Scroll down for more ⬇️' showFooter>
                <ItemBoard>
                  <ItemBoardElement imageURL='https://picsum.photos/300/310/?random' imgAltText='No image found' title='Unicorn A' description='Created On: 15th Jan 2019' />
                  <ItemBoardElement imageURL='https://picsum.photos/300/311/?random' imgAltText='No image found' title='Unicorn B' description='Created On: 15th Jan 2019' />
                </ItemBoard>
              </Window>
            </div>
          </div>

        </div> {/* close col-md-4 */}
        <div className='col-md-8'>
          <Window themeType='warning' title='Unicorn Preview:' footerText='Show More' showFooter={false}>
            <center>
              <br />
              <h2>{unicornCount}</h2>
              <br />
              <img src='https://picsum.photos/700/610/?random' />
              <br /><br /><br /><br /><br />
            </center>
          </Window>
        </div> {/* close col-md-8 */}
      </div> {/* close row */}
    </Layout>
  )
}

export default view(Page)
