import './_app.css'
import Config from '../Config'

export default function App({ Component, pageProps }) {
  return (
    <Config.Provider value={{ user: { name: 'John' }}}>
      <Component {...pageProps} />
    </Config.Provider>
  )
}