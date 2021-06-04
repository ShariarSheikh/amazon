import { Grid } from "@material-ui/core";
import styles from "../../styles/component/ProductsFeed.module.scss";
import Product from "../Product/Product";

const ProductsFeed = ({ products }) => {
  return (
    <Grid container className={styles.ProductsFeed}>
      {products.map(({ id, title, description, price, category, image }) => (
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
