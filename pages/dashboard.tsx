import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from '../styles/Dashboard.module.css'


export default function dashboard() {
    const [ session, loading ] = useSession()

    return <>
        <body className={styles.body}>
            {!session && <>
            <div className={styles.signedOut}>
                <br/>
                <button onClick={() => signIn()}>Sign In</button>
            </div>
            </>}
            {session && <>
            Signed in as {session.user.name} <br/>
            <button onClick={() => signOut()}>Sign out</button>
            </>}
        </body>
    </>
}
