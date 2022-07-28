/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

import styles from '../../styles/components/Projects.module.scss';

import { projects } from '../../config';
import Link from 'next/link';

export default function Projects() {
    return (
        <div className={`${styles.projects} container section`}>
            <h1 className="section__title">Projects</h1>
            <h2 className="section__subtitle">Recent projects I am working on / have worked on</h2>

            <div className={styles.projects__grid}>
                {projects.map((project, index) => (
                    <a href={project.url || '#'} target="_blank" rel="noreferrer" key={index} className={styles.projects__grid__item}>
                        <img className={styles.projects__grid__item__image} src={project.image} alt="" />
                        <h1 className={styles.projects__grid__item__title}>{project.title}</h1>
                        <h3 className={styles.projects__grid__item__createdWith}>{project.technologies}</h3>
                        <p className={styles.projects__grid__item__description}>{project.description}</p>
                    </a>
                ))}
            </div>
            <p className={styles.projects__extra}>
                For a list with more projects check <Link href="/projects">gerbenkr.xyz/projects</Link>
            </p>
        </div>
    );
}
