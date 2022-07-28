import type { NextPage } from 'next';
import Link from 'next/link';

import styles from '../styles/pages/404.module.scss';

const Custom404: NextPage = () => {
    return (
        <div className={styles.custom404}>
            <div className={styles.custom404__statusCode}>
                <h1>404</h1>
            </div>

            <div className={styles.custom404__body}>
                <h1 className={styles.custom404__body__title}>Page not found</h1>
                <p className={styles.custom404__body__description}>We can&apos;t seem to find the page you&apos;re looking for. Is the URL correct?</p>
                <Link href="/">to gerbenkr.nl</Link>
            </div>
        </div>
    );
};

export default Custom404;
