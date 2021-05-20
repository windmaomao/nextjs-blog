import styles from './layout.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Avatar from './Avatar'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Link href="/">Home</Link> 
        <Link href="/posts/3">Listing</Link>
        <Avatar />
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