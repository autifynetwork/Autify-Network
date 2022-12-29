import Intro from "../components/Intro";
import Info from "../components/Info";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Head from "next/head";
import News from "../components/News";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Blockchain Solutions for Supply-chain & Commerce | Autify Network
        </title>
      </Head>
      <Intro />
      <Info />
      <Team />
      <News />
      <Footer />
    </>
  );
};

export default Home;
