import cake7 from "/images/products/cakes/cake7.png";
import cake8 from "/images/products/cakes/cake8.png";
import cake9 from "/images/products/cakes/cake9.png";
import { useEffect, useState } from "react";

import { NewArticlesCardType } from "../../../types/CardType";
import Carousel from "../../UIComponents/Carousel/Carousel";
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
  {
    imgUrl: cake7,
    title: "How to make perfect cakes at home",
    date: "23 MAR",
    id: 3,
  },
  {
    imgUrl: cake8,
    title: "How to make perfect cakes at home",
    date: "23 MAR",
    id: 4,
  },
  {
    imgUrl: cake9,
    title: "How to make perfect cakes at home",
    date: "23 MAR",
    id: 5,
  },
  {
    imgUrl: cake7,
    title: "How to make perfect cakes at home",
    date: "23 MAR",
    id: 6,
  },
  {
    imgUrl: cake8,
    title: "How to make perfect cakes at home",
    date: "23 MAR",
    id: 7,
  },
  {
    imgUrl: cake9,
    title: "How to make perfect cakes at home",
    date: "23 MAR",
    id: 8,
  },
];

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
    <div className={styles.root}>
      <SectionDashedHeading heading="OUR NEW ARTICLES" />
      <div className={styles.carouselContainer}>
        {cards && <Carousel items={cards} itemsToShow={3}></Carousel>}
      </div>
    </div>
  );
}

export default NewArticles;
