import person1 from "/images/person/person1.png";
import person2 from "/images/person/person2.png";
import { useEffect, useState } from "react";

import { OurCustomersCardType } from "../../../types/CardType";
import Carousel from "../../UIComponents/Carousel/Carousel";
import OurCustomersCard from "../../UIComponents/OurCustomersCard/OurCustomersCard";
import SectionDashedHeading from "../../UIComponents/SectionDashedHeading/SectionDashedHeading";
import styles from "./OurCustomers.module.scss";

const data: OurCustomersCardType[] = [
  {
    personImgUrl: person1,
    name: "Bianka P.",
    place: "Bratislava, Slovakia",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    id: 0,
  },
  {
    personImgUrl: person2,
    name: "Jakub S.",
    place: "Bratislava, Slovakia",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    id: 1,
  },
  {
    personImgUrl: person1,
    name: "Bianka P.",
    place: "Bratislava, Slovakia",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    id: 2,
  },
  {
    personImgUrl: person2,
    name: "Jakub S.",
    place: "Bratislava, Slovakia",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    id: 3,
  },
  {
    personImgUrl: person1,
    name: "Bianka P.",
    place: "Bratislava, Slovakia",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    id: 4,
  },
  {
    personImgUrl: person2,
    name: "Jakub S.",
    place: "Bratislava, Slovakia",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    id: 5,
  },
];

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
