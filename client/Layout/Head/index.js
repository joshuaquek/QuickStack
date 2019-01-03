import { view } from 'react-easy-state'
import Head from 'next/head'
import './style.css'

function Element () {
  return (
    <Head>
      <title>QuickStack Demo</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' integrity='sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u' crossOrigin='anonymous' />
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css' integrity='sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp' crossOrigin='anonymous' />
      <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN' crossOrigin='anonymous' />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.3.11/css/AdminLTE.min.css' integrity='sha256-lrbt+EtA5LBekt2urIreC9u+QqzGsLKb0wEa+KgfVKA=' crossOrigin='anonymous' />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.3.11/css/skins/_all-skins.min.css' integrity='sha256-5emY6kIwbNuspD5fvCOiyhYx1BZkxX9g667UWdNIdFE=' crossOrigin='anonymous' />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.0/css/ionicons.min.css' integrity='sha256-3iu9jgsy9TpTwXKb7bNQzqWekRX7pPK+2OLj3R922fo=' crossOrigin='anonymous' />
    </Head>
  )
}

export default view(Element)
