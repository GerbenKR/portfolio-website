import React from 'react';

import Grid from '../Grid';

import styles from '../../styles/components/Socials.module.scss';

import { socials } from '../../config';

export default function Socials() {
    return (
        <div className={`${styles.socials} container section`}>
            <div>
                <Grid data={socials} />
            </div>
        </div>
    );
}
