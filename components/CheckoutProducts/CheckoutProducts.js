import Image from "next/image";
import styles from "../../styles/component/CheckoutProducts.module.scss";

const CheckoutProducts = ({
  category,
  description,
  price,
  title,
  image,
  id,
}) => {
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
              {title} <b>${price}</b>
            </li>
            <li className={styles.in_stock_li}>In Stock</li>
            <li>
              <input type="checkbox" name="" id="" />
              <span>
                This is gift <span>Learn more</span>
              </span>
            </li>
            <div className={styles.actions_div}>
              <div>
                <select defaultValue="1" name="items" className={styles.select_items}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className={styles.bracket}>|</div>
              <button>Delete</button>
              <div className={styles.bracket}>|</div>
              <button>Save for later</button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CheckoutProducts;
