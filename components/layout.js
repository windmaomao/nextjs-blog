import styles from './layout.module.css'
import Head from 'next/head'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {!home && (
          <>
            <a href="/">Home</a>         
            <a href="/posts/first-post">Post</a>         
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <a href="/">
            ← Back to home
          </a>
        </div>
      )}      
    </div>
  )
}