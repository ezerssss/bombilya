import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Navbar from '../components/Navbar';
import Banner from '../components/HomePage/Banner';
import HomeText from '../components/HomePage/HomeText';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bombilya</title>
        <meta name="description" content="Come and learn with BOMBILYA!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Banner />
        <HomeText />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
