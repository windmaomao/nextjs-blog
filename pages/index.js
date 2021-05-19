import Head from 'next/head'
import Layout from '../components/layout'
import Error from 'next/error'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>

      <main>     
        <h1 className="title">
          Welcome
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

      </main>

      <Error statusCode={404} />
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>      
    </Layout>
  )
}
