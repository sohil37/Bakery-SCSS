import { useEffect, useState } from "react";

import { newArticlesData as data } from "../../../data/cards";
import Carousel from "../../UIComponents/Carousel/Carousel";
import NewArticlesCard from "../../UIComponents/NewArticlesCard/NewArticlesCard";
import SectionDashedHeading from "../../UIComponents/SectionDashedHeading/SectionDashedHeading";
import styles from "./NewArticles.module.scss";

function NewArticles() {
  const [cards, setCards] = useState<JSX.Element[] | null>(null);

  useEffect(() => {
    try {
      const cards = data.map((curCard) => {
        return (
          <div key={curCard.id} className={styles.cardContainer}>
            <NewArticlesCard {...curCard}></NewArticlesCard>
          </div>
        );
      });
      setCards(cards);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <section className={styles.root}>
      <SectionDashedHeading heading="OUR NEW ARTICLES" />
      <div className={styles.carouselContainer}>
        {cards && <Carousel items={cards} itemsToShow={3}></Carousel>}
      </div>
    </section>
  );
}

export default NewArticles;
