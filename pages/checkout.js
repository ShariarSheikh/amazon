import Head from "next/head";
import Header from "../components/Header/Header";
import styles from "../styles/pages/Checkout.module.scss";

const Checkout = () => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/favicon.png"
          type="image/x-icon"
        />
        <title>Checkout</title>
      </Head>
      <main className={styles.checkout}>
        <Header />
        <h1>This is checkOut page</h1>
      </main>
    </>
  );
};

export default Checkout;
