import DottedTimeline from "../../UIComponents/DottedTimeline/DottedTimeline";
import styles from "./Collections.module.scss";

const timeline = [
  {
    text: "There are some redeming factors in greeking text",
    dotColor: "#bc7aff",
    imgUrl: "/images/products/cakes/cake1.png",
  },
  {
    text: "There are some redeming factors in greeking text",
    dotColor: "#748aff",
    imgUrl: "/images/products/cakes/cake2.png",
  },
  {
    text: "There are some redeming factors in greeking text",
    dotColor: "#fd85ff",
    imgUrl: "/images/products/cakes/cake3.png",
  },
];

function CollectionSection() {
  return (
    <div className={styles.root}>
      <div className={styles.sectionContainer}>
        <div className={styles.leftContainer}>
          <p className={styles.title}>See Collection</p>
          <h2 className={styles.desc}>OUR FINE HOME MADE CHOCOLATES</h2>
        </div>
        <DottedTimeline timeline={timeline} />
      </div>
    </div>
  );
}

export default CollectionSection;
