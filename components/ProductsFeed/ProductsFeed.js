import { Grid } from "@material-ui/core";
import Image from "next/image";
import styles from "../../styles/component/ProductsFeed.module.scss";
import Product from "../Product/Product";

const ProductsFeed = ({ products }) => {
  return (
    <Grid container className={styles.ProductsFeed}>
      {/* fist number line  4 products */}
      {products
        .slice(0, 4)
        .map(({ id, title, description, price, category, image }) => (
          <Product
            id={id}
            title={title}
            description={description}
            price={price}
            category={category}
            image={image}
            key={id}
          />
        ))}
      {/* banner */}
      <Image
        src="/assets/images/prime-day-banner1.png"
        width={1450}
        height={400}
        objectFit="initial"
        className={styles.prime_banner}
      />
      {/* second number line  4 products */}
      {products
        .slice(4, 8)
        .map(({ id, title, description, price, category, image }) => (
          <Product
            id={id}
            title={title}
            description={description}
            price={price}
            category={category}
            image={image}
            key={id}
          />
        ))}
      {/* third 1 products */}
      {products
        .slice(8, 9)
        .map(({ id, title, description, price, category, image }) => (
          <Product
            id={id}
            title={title}
            description={description}
            price={price}
            category={category}
            image={image}
            key={id}
            bigSizes={true}
          />
        ))}
      {/* four number line  4 products */}
      {products
        .slice(9, 13)
        .map(({ id, title, description, price, category, image }) => (
          <Product
            id={id}
            title={title}
            description={description}
            price={price}
            category={category}
            image={image}
            key={id}
          />
        ))}
      {/* five number line 4 products */}
      {products
        .slice(13, 17)
        .map(({ id, title, description, price, category, image }) => (
          <Product
            id={id}
            title={title}
            description={description}
            price={price}
            category={category}
            image={image}
            key={id}
          />
        ))}
      {/* five number line 4 products */}
      {products
        .slice(17, 19)
        .map(({ id, title, description, price, category, image }) => (
          <Product
            id={id}
            title={title}
            description={description}
            price={price}
            category={category}
            image={image}
            key={id}
          />
        ))}
    </Grid>
  );
};

export default ProductsFeed;
