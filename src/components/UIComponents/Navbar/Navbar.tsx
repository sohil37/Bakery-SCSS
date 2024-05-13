import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBars, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <div className={styles.root}>
      <nav className={styles.navbar}>
        <a href="#" className={styles.navbarBrand}>
          Bakery
        </a>
        <div className={styles.primaryMenuContainer}>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
        </div>
        <div className={styles.secondaryMenuContainer}>
          <a href="#">Login/Register</a>
          <a href="#">
            <FontAwesomeIcon icon={faHeart} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faBasketShopping} />
          </a>
        </div>
        <FontAwesomeIcon icon={faBars} className={styles.menuIcon} />
      </nav>
    </div>
  );
}

export default Navbar;
