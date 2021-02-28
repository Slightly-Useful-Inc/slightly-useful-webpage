import React, { Component } from 'react'
import styles from '../styles/Products.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default class products extends Component {
    render() {
        return (
            <>
                <div className={styles.header}>
                    <Head>
                        <title>Products - Slightly Useful Inc.</title>
                    </Head>
                    
                    <h1>Products by Slightly Useful Inc.</h1>

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
            </>
        )
    }
}
