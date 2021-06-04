import styles from "../../styles/component/ProductsFeed.module.scss";

const ProductsFeed = ({ products }) => {
  return (
    <div className={styles.ProductsFeed}>
      <h1>hello world</h1>
      {products.map(({ id, title, description, price, category, image })=> (
          <p>{title}</p>
      ))}
    </div>
  );
};

export default ProductsFeed;
