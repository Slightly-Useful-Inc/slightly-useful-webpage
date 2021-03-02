import React, { Component } from 'react'
import styles from '../styles/Products.module.css'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';
type State = {
    meat: string,
    pencils: string,
    no_no_snow: string,
    sporks: string,
    gaming_chair_desk: string,
}

export default class products extends Component<{}, State> {
    
    
    constructor(props){
        super(props);
        this.state = {
            meat: "",
            pencils: "",
            no_no_snow: "",
            sporks: "",
            gaming_chair_desk: ""

        }

    }
    
    componentDidMount = () => {
        axios.get("/api/prices").then((res)=>{
            this.setState({
                meat: res.data.meat_sticks,
                pencils: res.data.pencils,
                no_no_snow: res.data.no_no_snow,
                sporks: res.data.sporks,
                gaming_chair_desk: res.data.gaming_chair_desk
            })
        })
    }
    
    
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

                <div className={styles.main}>
                    <h3>Meat Sticks</h3>
                    <p>We have a wide variety of delicious meat sticks all for {this.state.meat}</p>
                    <h3>Pencils</h3>
                    <p>Here at Slightly Useful Inc. we are passionate about pencils, you can buy them for {this.state.pencils}</p>
                    <h3>No-No Snow</h3>
                    <p>No-No Snow is a premium powder that increases your enjoyment of life! Starting at {this.state.no_no_snow} per KG.</p>
                    <h3>Sporks</h3>
                    <p>We love eating utensils! You can buy sporks for {this.state.sporks}</p>
                    <h3>Gaming Desk and Chair</h3>
                    <p>Our epic gaming desk and chair available for {this.state.gaming_chair_desk}</p>
                </div>
            </>
        )
    }
}
