import styles from "./DottedTimeline.module.scss";

function DottedTimeline(props: {
  timeline: { text: string; imgUrl: string; dotColor: string }[];
}) {
  return (
    <div className={styles.root}>
      {props.timeline.map((curItem, index) => {
        try {
          return (
            <div className={styles.item} key={index}>
              <div className={styles.imageContainer}>
                <div
                  className={styles.dot}
                  style={{ backgroundColor: curItem.dotColor }}
                ></div>
                <img src={curItem.imgUrl} alt={curItem.text} />
              </div>
              <p className={styles.desc}>{curItem.text}</p>
            </div>
          );
        } catch (error) {
          console.error(error);
        }
      })}
    </div>
  );
}

export default DottedTimeline;
