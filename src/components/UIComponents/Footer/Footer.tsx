import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import IconButton from "../IconButton/IconButton";
import styles from "./Footer.module.scss";

const iconButtonBg = "#ABABAB";
const iconColor = "#fff8f8";
const stores = ["SLOVAKIA", "CZECH REPUBLIC", "FINLAND", "POLAND"];
const usefulLinks = [
  "HOME",
  "PRIVACY POLICY",
  "TERMS CONDITIONS",
  "CONTACT US",
];

function Footer() {
  return (
    <div className={styles.root}>
      <footer className={styles.footer}>
        <div className={styles.leftContainer}>
          <h2 className={styles.brand}>Bakery</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={styles.socialButtonContainer}>
            <IconButton
              icon={faFacebook}
              bgColor={iconButtonBg}
              iconColor={iconColor}
            ></IconButton>
            <IconButton
              icon={faLinkedinIn}
              bgColor={iconButtonBg}
              iconColor={iconColor}
            ></IconButton>
            <IconButton
              icon={faInstagram}
              bgColor={iconButtonBg}
              iconColor={iconColor}
            ></IconButton>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.linksContainer}>
            <h4 className={styles.linksHeading}>OUR STORES</h4>
            {stores.map((store, index) => {
              return (
                <a key={index} href="#">
                  {store}
                </a>
              );
            })}
          </div>
          <div className={styles.linksContainer}>
            <h4 className={styles.linksHeading}>USEFUL LINKS</h4>
            {usefulLinks.map((link, index) => {
              return (
                <a key={index} href="#">
                  {link}
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
