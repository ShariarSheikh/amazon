import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/component/Header.module.scss";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../../redux/slices/cartSlice";
import { Badge } from "@material-ui/core";
//react -icons/
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownFill } from "react-icons/ri";
import { FiShoppingCart, FiMenu } from "react-icons/fi";


const Header = () => {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <header className={styles.header}>
      {/* nav top */}
      <div className={styles.header_top}>
        {/* top left part */}
        <div className={styles.left}>
          <div className={styles.image_logo} onClick={() => router.push("/")}>
            <Image
              src="/assets/images/logo.png"
              width={130}
              height={40}
              objectFit="initial"
            />
          </div>
          <div className={styles.location_container}>
            <IoLocationOutline className={styles.icon} />
            <div>
              {" "}
              <p>Deliver to</p> <h4>Bangladesh</h4>
            </div>
          </div>
        </div>
        {/* top center part */}
        <div className={styles.center}>
          <div className={styles.search_container}>
            <div className={styles.search_container_left}>
              <select defaultValue="all" name="items" id="items">
                <option value="all">All</option>
                <option value="arts">Arts</option>
                <option value="baby">Baby</option>
                <option value="books">Books</option>
              </select>
            </div>
            <div className={styles.search_container_center}>
              <input type="text" />
            </div>
            <div className={styles.search_container_right}>
              <button>
                {" "}
                <AiOutlineSearch className={styles.search_icon} />
              </button>
            </div>
          </div>
        </div>
        {/* top right part */}
        <div className={styles.right}>
          <div className={styles.right_div1}>
            <Image
              src="/assets/images/flag.png"
              width={20}
              height={30}
              objectFit="none"
            />
            <RiArrowDropDownFill className={styles.icon} />
          </div>
          <div
            className={styles.right_div2}
            onClick={!session ? signIn : signOut}
          >
            <div> {session ? `Hello ${session.user.name}` : `Sign in`}</div>
            <div>
              <h4>Account & List</h4>{" "}
              <RiArrowDropDownFill className={styles.icon} />{" "}
            </div>
          </div>
          <div className={styles.right_div3}>
            <div>Returns</div>
            <div>
              <h4>&Orders</h4>
            </div>
          </div>
          <div
            className={styles.right_div4}
            onClick={() => router.push("/checkout")}
          >
            <Badge badgeContent={items.length} color="primary">
              <FiShoppingCart className={styles.icon} />
            </Badge>
            <h4>Cart</h4>
          </div>
        </div>
      </div>

      {/* nav bottom */}
      <div className={styles.header_bottom}>
        <div className={styles.nav_links_container}>
          <Link href="/">
            <a>
              <FiMenu className={styles.icon} />
              All
            </a>
          </Link>
          <Link href="/">Today's deals</Link>
          <Link href="/">Customer Service</Link>
          <Link href="/">Gift Cards</Link>
          <Link href="/">Registry</Link>
          <Link href="/">Sell</Link>
        </div>
        <div className={styles.covid_link_container}>
          <h4>Amazon's response to COVID-19</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
