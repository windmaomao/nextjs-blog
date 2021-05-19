import styles from './layout.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {!home && (
          <>
            <Link href="/"><a>Home</a></Link>         
            <Link href="/posts/first-post"><a>Post</a></Link>         
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}      
    </div>
  )
}