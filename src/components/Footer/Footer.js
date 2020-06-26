import React, {Component, Fragment, useEffect} from 'react'

import styles from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <button onClick={() => window.location.href = '/'}>Log Out</button>
        </footer>
    )
};