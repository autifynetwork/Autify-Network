import Intro from "../components/Intro";
import Info from "../components/Info";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Blockchain solution for global supply chain, retail, insurance,
          rewards | Autify Network.
        </title>
      </Head>
      <Intro />
      <Info />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
