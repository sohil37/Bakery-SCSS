import styles from "./NewArticlesCard.module.scss";

function NewArticlesCard(props: {
  imgUrl: string;
  title: string;
  date: string;
}) {
  return (
    <div className={styles.root}>
      <div
        className={styles.contentContainer}
        style={{ backgroundImage: `url(${props.imgUrl})` }}
      >
        <p className={styles.date}>{props.date}</p>
        <h3 className={styles.title}>{props.title}</h3>
      </div>
    </div>
  );
}

export default NewArticlesCard;
