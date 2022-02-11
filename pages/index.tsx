import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kevin Liao</title>
        <meta name="Kevin Liao Portfolio" content="About, Work Experience, Education, Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  )
}

export default Home
