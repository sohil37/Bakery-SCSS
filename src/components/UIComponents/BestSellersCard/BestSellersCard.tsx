import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BestSellersCardType } from "../../../types/CardType";
import Button from "../Button/Button";
import TransparentButton from "../TransparentButton/TransparentButton";
import styles from "./BestSellersCard.module.scss";

function BestSellersCard(props: BestSellersCardType) {
  return (
    <div className={styles.root}>
      <div className={styles.imgContainer}>
        <img src={props.imgUrl} alt="Cake Image" className={styles.img} />
        <div className={styles.likeBtnContainer}>
          <TransparentButton>
            <FontAwesomeIcon icon={faHeart} className={styles.likeButton} />
          </TransparentButton>
        </div>
      </div>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.desc}>{props.desc}</p>
      <div className={styles.actionContainer}>
        <h5 className={styles.price}>{props.price}&nbsp;&#8364;</h5>
        <Button text="Add to Cart"></Button>
      </div>
    </div>
  );
}

export default BestSellersCard;
