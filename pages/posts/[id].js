import Layout from '../../components/layout'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Post() {
  const { data } = useSWR('/api/user', fetcher)
  console.log(data)
  if (!data) return null
  return (
    <Layout>
      <h1>{data.name}</h1>
    </Layout>
  )
}