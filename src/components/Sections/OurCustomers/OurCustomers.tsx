import { useEffect, useState } from "react";

import { ourCustomersData as data } from "../../../data/cards";
import Carousel from "../../UIComponents/Carousel/Carousel";
import OurCustomersCard from "../../UIComponents/OurCustomersCard/OurCustomersCard";
import SectionDashedHeading from "../../UIComponents/SectionDashedHeading/SectionDashedHeading";
import styles from "./OurCustomers.module.scss";

function OurCustomers() {
  const [cards, setCards] = useState<JSX.Element[] | null>(null);

  useEffect(() => {
    try {
      const cards = data.map((curCard) => {
        return (
          <div key={curCard.id} className={styles.cardContainer}>
            <OurCustomersCard {...curCard}></OurCustomersCard>
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
      <SectionDashedHeading heading="OUR CUSTOMERS" />
      <div className={styles.carouselContainer}>
        {cards && <Carousel items={cards} itemsToShow={2}></Carousel>}
      </div>
    </div>
  );
}

export default OurCustomers;
