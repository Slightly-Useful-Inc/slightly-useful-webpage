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
      <div className={styles.links}>
        <Link href='/'>
          <a className={styles.home}>Home</a>
        </Link>
        <Link href='/about'>
          <a className={styles.about}>About</a>
        </Link>
        <Link href='/products'>
          <a className={styles.products}>Products</a>
        </Link>
      </div>

      <div className={styles.main}>
        <h3>Why should I buy my everything from Slightly Useful?</h3>
        <p>This is a question that we get asked a lot. In short, because you have too. Slightly Useful Inc. has what some would call a <i>"monoploy"</i>, but we call it a strangle hold on everything.</p>

      </div>
    </>
  )
}
