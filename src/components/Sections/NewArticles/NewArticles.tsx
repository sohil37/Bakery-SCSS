import cake7 from "/images/products/cakes/cake7.png";
import cake8 from "/images/products/cakes/cake8.png";
import cake9 from "/images/products/cakes/cake9.png";

import { NewArticlesCardType } from "../../../types/CardType";
import NewArticlesCard from "../../UIComponents/NewArticlesCard/NewArticlesCard";
import SectionDashedHeading from "../../UIComponents/SectionDashedHeading/SectionDashedHeading";
import styles from "./NewArticles.module.scss";

const data: NewArticlesCardType[] = [
  {
    imgUrl: cake7,
    title: "How to make perfect cakes at home",
    date: "23 MAR",
    id: 0,
  },
  {
    imgUrl: cake8,
    title: "How to make perfect cakes at home",
    date: "23 MAR",
    id: 1,
  },
  {
    imgUrl: cake9,
    title: "How to make perfect cakes at home",
    date: "23 MAR",
    id: 2,
  },
];

function NewArticles() {
  return (
    <div className={styles.root}>
      <div className={styles.sectionContainer}>
        <SectionDashedHeading heading="OUR NEW ARTICLES" />
        <div className={styles.carouselContainer}>
          <div className={styles.carousel}>
            {data.map((curCard) => {
              return (
                <div key={curCard.id} className={styles.cardContainer}>
                  <NewArticlesCard {...curCard}></NewArticlesCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArticles;
