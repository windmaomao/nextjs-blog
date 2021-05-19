import Head from 'next/head'
import Layout from '../../components/layout'

function FirstPost({ user }) {
  return (
    <Layout>
      <Head>
        <title>My First Post</title>
      </Head>
      <h1>First Post 2</h1>
      <p>{user.name}</p>
    </Layout>
  )
}

FirstPost.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/user')
  const user = await res.json()
  return { user }
}

export default FirstPost