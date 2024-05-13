import { useEffect, useState } from "react";

import { bestSellersData as data } from "../../../data/cards";
import BestSellersCard from "../../UIComponents/BestSellersCard/BestSellersCard";
import Carousel from "../../UIComponents/Carousel/Carousel";
import SectionDashedHeading from "../../UIComponents/SectionDashedHeading/SectionDashedHeading";
import TransparentButton from "../../UIComponents/TransparentButton/TransparentButton";
import styles from "./BestSellers.module.scss";

function BestSellers() {
  const [cards, setCards] = useState<JSX.Element[] | null>(null);

  useEffect(() => {
    try {
      const cards = data.map((curCard) => {
        return (
          <div key={curCard.id} className={styles.cardContainer}>
            <BestSellersCard {...curCard}></BestSellersCard>
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
      <SectionDashedHeading heading="OUR BEST SELLERS" />
      <div className={styles.carouselContainer}>
        <TransparentButton>
          <span className={styles.text}>See All</span>
        </TransparentButton>
        {cards && <Carousel items={cards} itemsToShow={3}></Carousel>}
      </div>
    </section>
  );
}

export default BestSellers;
