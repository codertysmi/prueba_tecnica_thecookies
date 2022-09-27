import React from 'react';
import * as styles from '../styles/header.module.css'
import '../styles/global.css'


export default function Header(props){

    return(
        <section className={styles.header}>
            <h1 className="playfair">{props.text1}</h1>
            <h3>{props.text2}</h3>
        </section>
    )

}