import './_app.css'
import Config from '../Config'
import { Provider as AuthProvider } from 'next-auth/client'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <Config.Provider value={{ user: { name: 'John' }}}>
        <Component {...pageProps} />
      </Config.Provider>
    </AuthProvider>
  )
}