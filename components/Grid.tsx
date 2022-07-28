import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { useWindowSize } from '../hooks/useWindowSize';

import styles from '../styles/components/Grid.module.scss';
import { GridItem } from '../types';

type Props = {
    data: GridItem[];
};

export default function Grid({ data }: Props) {
    const screen = useWindowSize();

    const [mobileView, setMobileView] = useState<Boolean>();
    const [dataCollapsed, setDatCollapsed] = useState<Boolean>(false);

    // When the screen width changes
    useEffect(() => {
        if (screen.width < 465) {
            setMobileView(true);
        } else if (screen.width > 464) {
            setMobileView(false);
        }
    }, [screen]);

    const toggleCollapsed = () => {
        if (dataCollapsed == true) {
            setDatCollapsed(false);
        } else {
            setDatCollapsed(true);
        }
    };

    return (
        <div className={`${styles.grid}`}>
            {data.map((item, index) => {
                // If on phone, data not collapsed: show max 5 items
                if (mobileView && dataCollapsed == false && index > 5) {
                    return;
                }

                const image = require('../public/images/' + item.image);

                if (item.url == null) {
                    return (
                        <div key={index} className={styles.grid__item}>
                            <div className={styles.grid__item__image}>
                                <Image alt={item.title} src={image} />
                            </div>
                            <h3 className={styles.grid__item__title}>{item.title}</h3>
                        </div>
                    );
                } else {
                    return (
                        <a key={index} href={item.url} target="_blank" rel="noreferrer" className={styles.grid__item}>
                            <div className={styles.grid__item__image}>
                                <Image alt={item.title} src={image} />
                            </div>
                            <h3 className={styles.grid__item__title}>{item.title}</h3>
                        </a>
                    );
                }
            })}

            {mobileView == true && dataCollapsed == false && (
                <p onClick={toggleCollapsed} className={styles.grid__toggleCollapsed}>
                    Show more
                </p>
            )}
            {mobileView == true && dataCollapsed == true && (
                <p onClick={toggleCollapsed} className={styles.grid__toggleCollapsed}>
                    Show less
                </p>
            )}
        </div>
    );
}

{
    /* <div className={styles.grid__item}>
                    <p key={index}>{item.title}</p>
                </div> */
}
