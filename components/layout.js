import styles from './layout.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Link href="/">Home</Link>         
        <Link href="/posts/2">Post 2</Link>         
      </header>
      <main>{children}</main>
      {false && (
        <div className={styles.backToHome}>
          <Link href="/">
            ← Back to home
          </Link>
        </div>
      )}      
    </div>
  )
}