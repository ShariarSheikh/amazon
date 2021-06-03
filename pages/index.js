import Head from "next/head";
import styles from "../styles/pages/Home.module.scss";
import Header from "../components/Header/Header";

const index = () => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/favicon.png"
          type="image/x-icon"
        />
        <title>Amazon</title>
      </Head>
      <main className={styles.home}>
        <Header />
      </main>
    </>
  );
};

export default index;
