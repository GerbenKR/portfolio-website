import type { NextPage } from 'next';

import Welcome from '../components/home/Welcome';
import AboutMe from '../components/home/AboutMe';
import Technologies from '../components/home/Technologies';
import Socials from '../components/home/Socials';
import Projects from '../components/home/Projects';

const Home: NextPage = () => {
    return (
        <>
            <Welcome />
            <hr id="aboutme" className="devider" />
            <AboutMe />
            <hr className="devider" />
            <Technologies />
            <hr id="projects" className="devider" />
            <Projects />
            <hr className="devider" />
            <Socials />
            <hr className="devider" />
        </>
    );
};

export default Home;
