import React from 'react';

import Grid from '../Grid';

import styles from '../../styles/components/Technologies.module.scss';

import { technologies } from '../../config';

export default function Technologies() {
    return (
        <div className={`${styles.technolgies} container section`}>
            <h1 className="section__title">Technolgies</h1>
            <h2 className="section__subtitle">Technologies i am currently learning, using or have experience with</h2>

            <div className={styles.technolgies__gridHolder}>
                <Grid data={technologies} />
            </div>
        </div>
    );
}
