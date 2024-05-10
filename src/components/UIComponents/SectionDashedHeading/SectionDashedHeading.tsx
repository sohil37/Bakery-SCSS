import styles from "./SectionDashedHeading.module.scss";

function SectionDashedHeading(props: { heading: string }) {
  return (
    <div className={styles.root}>
      <div className={styles.hr}></div>
      <h1 className={styles.title}>{props.heading}</h1>
      <div className={styles.hr}></div>
    </div>
  );
}

export default SectionDashedHeading;
