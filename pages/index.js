import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Windmaomao</title>
      </Head>

      <main>     
        <h1 className="title">
          Welcome
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

      </main>
   
    </Layout>
  )
}
