import { Grid } from "@material-ui/core";
import Head from "next/head";
import { useSelector } from "react-redux";
import CheckoutProducts from "../../components/CheckoutProducts/CheckoutProducts";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { selectItems } from "../../redux/slices/cartSlice";
import styles from "../../styles/pages/Checkout.module.scss";

const Checkout = () => {
  const items = useSelector(selectItems);
  const totalPrice = items.reduce((total, prd) => total + prd.price, 0);
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
      <Header />
      <main className={styles.checkout} id="top">
        {/* left container */}
        <Grid container className={styles.checkout_container}>
          <Grid
            item
            xs={12}
            sm={10}
            md={9}
            lg={9}
            xl={9}
            className={styles.checkout_items_container}
          >
            <div className={styles.checkout_header_container}>
              <h1>Shopping Cart</h1>
              <p>Price</p>
            </div>
            <div className={styles.checkout_items_container}>
              {items.map((item,i) => (
                  <CheckoutProducts
                    category={item.category}
                    description={item.description}
                    price={item.price}
                    title={item.title}
                    image={item.image}
                    id={item.id}
                    key={i}
                  />
                )
              )}
            </div>

            <div className={styles.checkout_total_price_container}>
              {items.length > 0 && (
                <span>
                  Subtotal ({items.length} items):
                  <b>${totalPrice.toFixed(2)}</b>
                </span>
              )}
            </div>
          </Grid>
          {/* right container */}
          <Grid
            item
            xs={12}
            sm={8}
            md={2}
            lg={2}
            xl={2}
            className={styles.process_order_container}
          >
            <div className={styles.process_order}>
              <p>
                Subtotal ({items.length}): <b>${totalPrice.toFixed(2)}</b>{" "}
              </p>
              <div>
                <input type="checkbox" name="" id="" />{" "}
                <span>Order this contains a gift</span>
              </div>
              <button>Process Order</button>
            </div>

            <div className={styles.relative_items_container}>
              <h6>hello items</h6>
              <h6>hello items</h6>
              <h6>hello items</h6>
              <h6>hello items</h6>
            </div>
          </Grid>
        </Grid>
      </main>
      <Footer />
    </>
  );
};

export default Checkout;
