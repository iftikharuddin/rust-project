import type { NextPage } from "next";
import Head from "next/head";
import { HomeView, BasicsView } from "../views";


const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>dBanks</title>
        <meta
          name="description"
          content="dBanks"
        />
      </Head>
      {/* <HomeView /> */}
      <BasicsView/>
    </div>
  );
};

export default Home;
