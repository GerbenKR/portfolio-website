import React from 'react';

import styles from '../../styles/components/Welcome.module.scss';

export default function Welcome() {
    return (
        <div className={`${styles.welcome} container`}>
            <h1 className={styles.welcome__title}>
                <span className={styles.welcome__wavingHand}>👋</span>
                Hi, I&apos;m Gerben
            </h1>
            <p className={styles.welcome__description}>Software Developer</p>
        </div>
    );
}
