import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectItems,
} from "../../redux/slices/cartSlice";
import styles from "../../styles/component/CheckoutProducts.module.scss";

const CheckoutProducts = ({
  category,
  description,
  price,
  title,
  image,
  id,
}) => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const addItemToCart = () => {
    dispatch(addToCart);
  };
  const removeItemFromCart = () => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <>
      <div className={styles.checkout_items}>
        <div className={styles.img_container}>
          <Image
            src={image}
            width={190}
            height={180}
            objectFit="contain"
            alt="item"
          />
        </div>
        <div className={styles.items_info_container}>
          <ul>
            <li className={styles.first_line}>
              <div className={styles.description_text}>{description}</div>{" "}
            </li>
            <li className={styles.in_stock_li}>In Stock</li>
            <li>
              <input
                type="checkbox"
                name=""
                className={styles.checkbox_input}
              />
              <span>
                This is gift{" "}
                <span className={styles.learn_more}>Learn more</span>
              </span>
            </li>
            <div className={styles.actions_div}>
              <div>
                <button
                  onClick={addItemToCart}
                  className={styles.addItemToCart_btn}
                >
                  Add
                </button>
              </div>
              <div className={styles.bracket}>|</div>
              <button onClick={removeItemFromCart}>Delete</button>
              <div className={styles.bracket}>|</div>
              <button>Save for later</button>
            </div>
          </ul>
        </div>
        {/* items price */}
        <div className={styles.item_price}>
          <b>${price}</b>
        </div>
      </div>
    </>
  );
};

export default CheckoutProducts;
