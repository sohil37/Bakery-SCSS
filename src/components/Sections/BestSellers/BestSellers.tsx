import SectionDashedHeading from "../../UIComponents/SectionDashedHeading/SectionDashedHeading";
import styles from "./BestSellers.module.scss";

function BestSellers() {
  return (
    <div className={styles.root}>
      <div className={styles.sectionContainer}>
        <SectionDashedHeading heading="OUR BEST SELLERS" />
      </div>
    </div>
  );
}

export default BestSellers;
