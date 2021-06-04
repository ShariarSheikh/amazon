import Image from "next/image";
import styles from "../../styles/component/Product.module.scss";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { Grid } from "@material-ui/core";

const MAX_RATE = 5;
const MIN_RATE = 4;

const Product = ({ id, title, description, price, category, image }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATE - MIN_RATE + 1)) + MIN_RATE
  );

  return (
    <Grid item className={styles.product}>
      <p className={styles.category_text}>{category}</p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className={styles.title_text}>{title}</h4>
      <div>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <AiFillStar key={i}  className={styles.rating_star}/>
          ))}
      </div>
      <div>
        <p className={styles.description_text}>{description}</p>
      </div>
      <div>
        <p className={styles.price_text}>${price}</p>
      </div>
      <div>
          <button className={styles.add_to_cart}>
              Add to cart
          </button>
      </div>
    </Grid>
  );
};

export default Product;
