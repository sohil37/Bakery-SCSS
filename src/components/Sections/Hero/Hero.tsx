import donuts from "/images/products/donuts.png";

import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import Button from "../../UIComponents/Button/Button";
import DownArrow from "../../UIComponents/DownArrow/DownArrow";
import IconButton from "../../UIComponents/IconButton/IconButton";
import styles from "./Hero.module.scss";

const iconButtonBg = "#480054";
const iconColor = "#ffe7e7";

function HeroSection() {
  return (
    <section className={styles.root}>
      <div className={styles.contentContainer}>
        <div className={styles.leftContainer}>
          <h1 className={styles.title}>
            Sweet moments, freshly baked with love
          </h1>
          <p className={styles.desc}>
            Customized cakes, treats and every thing sweet for all your special
            moments.
          </p>
          <Button text="Shop Now" />
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
          <img src={donuts} alt="donuts" />
        </div>
      </div>
      <DownArrow />
    </section>
  );
}

export default HeroSection;
