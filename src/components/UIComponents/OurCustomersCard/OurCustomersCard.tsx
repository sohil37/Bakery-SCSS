import { OurCustomersCardType } from "../../../types/CardType";
import styles from "./OurCustomersCard.module.scss";

function OurCustomersCard(props: OurCustomersCardType) {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <img src={props.personImgUrl} alt={`${props.name}'s Photograph`} />
        <div className={styles.namePlaceContainer}>
          <h2 className={styles.name}>{props.name}</h2>
          <p className={styles.place}>{props.place}</p>
        </div>
      </div>
      <p className={styles.desc}>{props.desc}</p>
    </div>
  );
}

export default OurCustomersCard;
