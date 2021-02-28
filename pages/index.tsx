import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className={styles.header}>
        <Head>
          <title>Home - Slightly Useful Inc.</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Slightly Useful Inc.</h1>
        

      </div>
      <div className={styles.home}>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
      <div className={styles.about}>
        <Link href='/about'>
          <a>About</a>
        </Link>

        
      </div>
    </>
  )
}
