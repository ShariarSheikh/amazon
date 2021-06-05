import Image from "next/image";
import styles from "../../styles/component/Product.module.scss";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const MAX_RATE = 5;
const MIN_RATE = 4;

const Product = ({
  id,
  title,
  description,
  price,
  category,
  image,
  bigSizes,
}) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATE - MIN_RATE + 1)) + MIN_RATE
  );
  const dispatch = useDispatch()

  const addItemToCart =()=>{

    const product = {
      id,
      title,
      description,
      price,
      category,
      image,
    }
    dispatch(addToCart(product))  
  }
  return (
    <Grid item className={bigSizes ? styles.product_bigSize : styles.product}>
      <p className={styles.category_text}>{category}</p>
      <Image
        src={image}
        height={200}
        width={200}
        objectFit="contain"
        className={styles.product_img}
      />
      <h4 className={styles.title_text}>{title}</h4>
      <div>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <AiFillStar key={i} className={styles.rating_star} />
          ))}
      </div>
      <div>
        <p className={styles.description_text}>{description}</p>
      </div>
      <div>
        <p className={styles.price_text}>${price}</p>
      </div>
      <div onClick={addItemToCart}>
        <button className={styles.add_to_cart} >Add to cart</button>
      </div>
    </Grid>
  );
};

export default Product;
