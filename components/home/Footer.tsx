import Image from 'next/image';
import React from 'react';

import styles from '../../styles/components/Footer.module.scss';

export default function Footer() {
    return (
        <div className={`${styles.footer} container section`}>
            <Image alt="" src="https://assets.gerbenkr.nl/logos/1920_gerbenkr_white.png" width={150} height="35" />
            <p>
                <a href="mailto:info@gerbenkr.nl">info@gerbenkr.nl</a>
            </p>
        </div>
    );
}
