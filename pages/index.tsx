import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, PgVendas } from '../components/index'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cantinho do Crochê</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Header />
        <PgVendas />
      </body>
    </div>
  )
}

export default Home
