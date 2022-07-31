import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/HomePage/Banner';
import HomeText from '../components/HomePage/HomeText';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Bombilya</title>
        <meta name="description" content="Come and learn with BOMBILYA!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner />
        <HomeText />
      </main>

    </Layout>
  );
};

export default Home;
