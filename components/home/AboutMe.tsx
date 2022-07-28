import Image from 'next/image';
import React from 'react';

import profilePicture from '../../public/images/me.png';

import styles from '../../styles/components/AboutMe.module.scss';

export default function AboutMe() {
    return (
        <div className={`${styles.aboutMe} container`}>
            <div className={styles.aboutMe__imageHolder}>
                <Image src={profilePicture} alt="" width={400} height={400} />
            </div>

            <div className={styles.aboutMe__content}>
                <h1 className={styles.aboutMe__content__title}>About me</h1>
                <h2 className={styles.aboutMe__content__subtitle}>Learning software developer from the Netherlands</h2>
                <p className={styles.aboutMe__content__description}>Hi, i’m Gerben! I’m a young self learning software developer! In the past years i learned myself a lot about html, css, javascript, nodejs and web design. I’m currently in my first year of my Software development study at the Graafschap College.</p>

                <div className={styles.aboutMe__content__info}>
                    <div className={styles.aboutMe__content__info__section}>
                        <div className={styles.aboutMe__content__info__section__item}>
                            <p className={styles.aboutMe__content__info__section__item__title}>Residence</p>
                            <p className={styles.aboutMe__content__info__section__item__value}>The Netherlands</p>
                        </div>
                        <div className={styles.aboutMe__content__info__section__item}>
                            <p className={styles.aboutMe__content__info__section__item__title}>Instagram</p>
                            <p className={styles.aboutMe__content__info__section__item__value}>@gerben.kr</p>
                        </div>
                        <div className={styles.aboutMe__content__info__section__item}>
                            <p className={styles.aboutMe__content__info__section__item__title}>Experience</p>
                            <p className={styles.aboutMe__content__info__section__item__value}>HTML, CSS, SCSS, JavaScript, NodeJs, VueJS, Nuxt, Mysql</p>
                        </div>
                    </div>
                    <div className={styles.aboutMe__content__info__section}>
                        <div className={styles.aboutMe__content__info__section__item}>
                            <p className={styles.aboutMe__content__info__section__item__title}>E-mail</p>
                            <p className={styles.aboutMe__content__info__section__item__value}>info@gerbenkr.nl</p>
                        </div>
                        <div className={styles.aboutMe__content__info__section__item}>
                            <p className={styles.aboutMe__content__info__section__item__title}>Discord</p>
                            <p className={styles.aboutMe__content__info__section__item__value}>Gerben#0500</p>
                        </div>
                        <div className={styles.aboutMe__content__info__section__item}>
                            <p className={styles.aboutMe__content__info__section__item__title}>Learning</p>
                            <p className={styles.aboutMe__content__info__section__item__value}>React</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
