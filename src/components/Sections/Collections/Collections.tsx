import { timeline } from "../../../data/timeline";
import DottedTimeline from "../../UIComponents/DottedTimeline/DottedTimeline";
import styles from "./Collections.module.scss";

function CollectionSection() {
  return (
    <section className={styles.root}>
      <div className={styles.sectionContainer}>
        <div className={styles.leftContainer}>
          <p className={styles.title}>See Collection</p>
          <h2 className={styles.desc}>OUR FINE HOME MADE CHOCOLATES</h2>
        </div>
        <div className={styles.rightContainer}>
          <DottedTimeline timeline={timeline} />
        </div>
      </div>
    </section>
  );
}

export default CollectionSection;
