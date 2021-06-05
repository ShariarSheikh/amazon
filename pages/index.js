import Head from "next/head";
import styles from "../styles/pages/Home.module.scss";
import Header from "../components/Header/Header";
import TopBanner from "../components/TopBanner/TopBanner";
import ProductsFeed from "../components/ProductsFeed/ProductsFeed";
import Footer from "../components/Footer/Footer";

const index = ({ products }) => {
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
      {/* header */}
      <Header />
      <main className={styles.home} id="top">
        <TopBanner />
        <ProductsFeed products={products} />
      </main>
      <Footer />
    </>
  );
};

export default index;

// https://fakestoreapi.com/products

export async function getServerSideProps(context) {
  const products = await fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    props: {
      products,
    },
  };
}
