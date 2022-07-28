import Link from 'next/link';
import React from 'react';

import styles from '../styles/components/Header.module.scss';

export default function Header() {
    return (
        <div className={`${styles.header} container`}>
            <Link href="/">
                <h1 className={styles.header__title}>GerbenKr</h1>
            </Link>

            <div className={styles.header__navigation}>
                <Link href="/#aboutme">about me</Link>
                <Link href="/#projects">projects</Link>
            </div>
        </div>
    );
}
