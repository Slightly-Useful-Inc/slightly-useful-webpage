import React, { Component } from 'react'
import styles from '../styles/About.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default class about extends Component {
    render() {
        return (
            <>
                <div className={styles.header}>
                    <Head>
                        <title>About - Slightly Useful Inc.</title>
                    </Head>
                    
                    <h1>About Slightly Useful Inc.</h1>

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
                    <h3>Our Staff</h3>
                    <p>We have a great team here at Slightly Useful Inc.</p>
                    <h3>Branch Managers/Board Members</h3>
                    <ul>
                        <li>
                            Anthony, Slightly Useful Software, 47% Owner
                        </li>
                        <br/>
                        <li>
                            Travis, Gods Pencil Co. 3% Owner
                        </li>
                        <br/>
                        <li>
                            Jordan, Dani's Stash, 48% Owner
                        </li>
                        <br/>
                        <li>
                            David, Pencils, 2% Owner
                        </li>

                    </ul>
                </div>
            </>
        )
    }
}
