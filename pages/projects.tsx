import type { NextPage } from 'next';

import styles from '../styles/pages/ProjectsPage.module.scss';

const Home: NextPage = () => {
    return (
        <div className={`${styles.projects} container section`}>
            <h1 className="section__title">Projects</h1>
            <h2 className="section__subtitle">A list of open, closed or private projects i am working on / have worked on.</h2>

            <div className={styles.projects__list}>
                <h2 className={styles.projects__list__subtitle}>Open projects</h2>
                <ul>
                    <li className="link">
                        <a className="text" target="_blank" rel="noreferrer" href="/lingo">
                            Lingo
                        </a>
                    </li>
                    <li className="link">
                        <a className="text" target="_blank" rel="noreferrer" href="/omrekenen">
                            Omrekenen
                        </a>
                    </li>
                    <li className="link">
                        <a className="text" target="_blank" rel="noreferrer" href="/3fm-radioplayer">
                            NPO 3FM Radioplayer Discord Bot
                        </a>
                    </li>
                    <li className="link">
                        <a className="text" target="_blank" rel="noreferrer" href="/radioring">
                            RadioRing Leaker
                        </a>
                    </li>
                    <li className="link">
                        <a className="text" target="_blank" rel="noreferrer" href="/whois">
                            Discord Whois
                        </a>
                    </li>
                    <li className="link">
                        <a className="text" target="_blank" rel="noreferrer" href="/magister">
                            Magister Auto Week
                        </a>
                    </li>
                    <li className="link">
                        <a className="text" target="_blank" rel="noreferrer" href="/cps">
                            CPS-counter
                        </a>
                    </li>
                    <li className="link">
                        <a className="text" target="_blank" rel="noreferrer" href="/n-term">
                            N-term berekenen
                        </a>
                    </li>
                    <li className="link">
                        <a className="text" target="_blank" rel="noreferrer" href="/q-foute-uur">
                            Qmusic Foute Uur
                        </a>
                    </li>
                    <li className="link">
                        <a className="text" target="_blank" rel="noreferrer" href="/erik-jan-weerbericht">
                            Erik-Jan&apos;s Weerbericht
                        </a>
                    </li>
                    <li className="link">
                        <a className="text" target="_blank" rel="noreferrer" href="/">
                            Gerbenkr.nl
                        </a>
                    </li>
                </ul>

                <h2 className={styles.projects__list__subtitle}>Closed projects</h2>
                <ul>
                    <li>
                        <p className="text">AapiesWereld Discord Bot</p>
                    </li>
                    <li>
                        <p className="text">Draqz Discord Bot</p>
                    </li>
                    <li>
                        <p className="text">MiazDesigns Discord Bot</p>
                    </li>
                    <li>
                        <p className="text">Hyper Designs Discord Bot</p>
                    </li>
                    <li>
                        <p className="text">Senia Discord Bot</p>
                    </li>
                    <li>
                        <p className="text">...</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
