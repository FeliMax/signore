import type {NextPage} from 'next'
import Head from 'next/head'
import {Header} from '../components/Header/Header';
import {Hero} from '../components/Hero/Hero';
import {AboutMe} from '../components/About me/About me';
import {Skills} from '../components/Skills/Skills';
import {Projects} from '../components/Projects/Projects';
import {Footer} from '../components/Footer/Footer';

const Home: NextPage = () => {
    return (
        <div className="">
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header />

            <main>
                <Hero/>
                <AboutMe/>
                <Skills/>
                <Projects/>
                <Footer/>

            </main>

            {/*<footer className={styles.footer}>*/}
            {/*</footer>*/}
        </div>
    )
}

export default Home
