import Image from "next/image";
import Link from "next/link";
import { AiOutlineAmazon, AiOutlineGlobal } from "react-icons/ai";
import styles from "../../styles/component/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_top}>
          <a href="#top">
            <h3>Back to Top</h3>
          </a>
        </div>

        <div className={styles.footer_center}>
          {/* first links container */}
          <div>
            <h4>Get To Know Us</h4>
            <ul>
              <li>
                <Link href="/">Career</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">About Amazon</Link>
              </li>
              <li>
                <Link href="/">Investor Relations</Link>
              </li>
              <li>
                <Link href="/">Amazon Devices</Link>
              </li>
              <li>
                <Link href="/">Amazon Tours</Link>
              </li>
            </ul>
          </div>
          <div className={styles.space_between}></div>
          {/* second links container */}
          <div>
            <h4>Make Money With Us</h4>
            <ul>
              <li>
                <Link href="/">Sell products on Amazon</Link>
              </li>
              <li>
                <Link href="/">Sell on Amazon Business</Link>
              </li>
              <li>
                <Link href="/">Sell apps on Amazon</Link>
              </li>
              <li>
                <Link href="/">Investor Relations</Link>
              </li>
              <li>
                <Link href="/">Become an Affiliate</Link>
              </li>
              <li>
                <Link href="/">Advertise Your Products</Link>
              </li>
              <li>
                <Link href="/">Self-Publish with Us</Link>
              </li>
              <li>
                <Link href="/">Host an Amazon Hub</Link>
              </li>
              <li>
                <Link href="/">›See More Make Money with Us</Link>
              </li>
            </ul>
          </div>
          <div className={styles.space_between}></div>
          {/* third links container */}
          <div>
            <h4>Amazon Payment Products</h4>
            <ul>
              <li>
                <Link href="/">Career</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">About Amazon</Link>
              </li>
              <li>
                <Link href="/">Investor Relations</Link>
              </li>
              <li>
                <Link href="/">Amazon Devices</Link>
              </li>
              <li>
                <Link href="/">Amazon Tours</Link>
              </li>
              <li>
                <Link href="/">Amazon Tours</Link>
              </li>
              <li>
                <Link href="/">Amazon Tours</Link>
              </li>
              <li>
                <Link href="/">Amazon Tours</Link>
              </li>
            </ul>
          </div>

          <div className={styles.space_between}></div>
          {/* third links container */}
          <div>
            <h4>Let Us Help You</h4>
            <ul>
              <li>
                <Link href="/">Career</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">About Amazon</Link>
              </li>
              <li>
                <Link href="/">Investor Relations</Link>
              </li>
              <li>
                <Link href="/">Amazon Devices</Link>
              </li>
              <li>
                <Link href="/">Amazon Tours</Link>
              </li>
              <li>
                <Link href="/">Amazon Tours</Link>
              </li>
              <li>
                <Link href="/">Amazon Tours</Link>
              </li>
              <li>
                <Link href="/">Amazon Tours</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.hr_and_margin_top}></div>
        <div className={styles.footer_bottom}>
          <div className={styles.logo_container}>
            {/* <Image
               src="/assets/images/logo.png"
               width={130}
               height={40}
               objectFit="initial"
            /> */}
            <Link href="/">
              <a>
                <AiOutlineAmazon className={styles.icon} />
              </a>
            </Link>
          </div>
          <div className={styles.btn_container}>
            <Link href="/">
              <a>
                <AiOutlineGlobal  className={styles.icon_global}/>
                English
              </a>
            </Link>
            <Link href="/">$ USD .us-Dollar</Link>
            <Link href="/">
              <a>
                <Image
                  src="/assets/images/united-states.svg"
                  width={50}
                  height={30}
                  objectFit="contain"
                  className={styles.flag_svg}
                />
                United States
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
