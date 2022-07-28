import React, { useEffect, useState } from 'react';

import styles from '../styles/components/DowntimeNotification.module.scss';

export default function DowntimeNotification() {
    const [offline, setOffline] = useState<Boolean>(false);

    useEffect(() => {
        (async () => {
            const response = await fetch('/api/status');
            const { offlineCount } = await response.json();

            if (offlineCount != 0) {
                setOffline(true);
            }
        })();
    }, []);

    return (
        <>
            {offline == true && (
                <div className={styles.downtimeNotification}>
                    <div className={`${styles.downtimeNotification__inner} container`}>
                        <svg className={styles.downtimeNotification__inner__icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                        <p className={styles.downtimeNotification__inner__description}>Door een storing zijn niet alle projecten/features beschikbaar.</p>
                    </div>
                </div>
            )}
        </>
    );
}
