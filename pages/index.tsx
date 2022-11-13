import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/sections/Header';
import { Hero } from '../components/sections/Hero';
import { AboutMe } from '../components/sections/AboutMe';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { Footer } from '../components/sections/Footer';

const Home: NextPage = () => {
    return (
        <div className="">
            <Head>
                <title>signore</title>
                <meta
                    name="description"
                    content="signore - portfolio page template"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main>
                <Hero />
                <AboutMe />
                <Skills />
                <Projects />
                <Footer />
            </main>
        </div>
    );
};

export default Home;
