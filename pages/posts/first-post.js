import Head from 'next/head'
import Layout from '../../components/layout'

function FirstPost({ count }) {
  return (
    <Layout>
      <Head>
        <title>My First Post</title>
      </Head>
      <h1>First Post 2</h1>
      <p>{count}</p>
    </Layout>
  )
}

FirstPost.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const data = await res.json()
  return { count: data.network_count }
}

export default FirstPost