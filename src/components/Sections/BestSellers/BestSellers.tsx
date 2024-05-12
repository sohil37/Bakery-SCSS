import cake4 from "/images/products/cakes/cake4.png";
import cake5 from "/images/products/cakes/cake5.png";
import cake6 from "/images/products/cakes/cake6.png";
import { useEffect, useState } from "react";

import { BestSellersCardType } from "../../../types/CardType";
import BestSellersCard from "../../UIComponents/BestSellersCard/BestSellersCard";
import Carousel from "../../UIComponents/Carousel/Carousel";
import SectionDashedHeading from "../../UIComponents/SectionDashedHeading/SectionDashedHeading";
import TransparentButton from "../../UIComponents/TransparentButton/TransparentButton";
import styles from "./BestSellers.module.scss";

const data: BestSellersCardType[] = [
  {
    imgUrl: cake4,
    title: "3-tier red velvet cake",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    price: "45.90",
    id: 0,
  },
  {
    imgUrl: cake5,
    title: "3-tier red velvet cake",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    price: "45.90",
    id: 1,
  },
  {
    imgUrl: cake6,
    title: "3-tier red velvet cake",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    price: "45.90",
    id: 2,
  },
  {
    imgUrl: cake4,
    title: "3-tier red velvet cake",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    price: "45.90",
    id: 3,
  },
  {
    imgUrl: cake5,
    title: "3-tier red velvet cake",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    price: "45.90",
    id: 4,
  },
  {
    imgUrl: cake6,
    title: "3-tier red velvet cake",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    price: "45.90",
    id: 5,
  },
  {
    imgUrl: cake4,
    title: "3-tier red velvet cake",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    price: "45.90",
    id: 6,
  },
  {
    imgUrl: cake5,
    title: "3-tier red velvet cake",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    price: "45.90",
    id: 7,
  },
  {
    imgUrl: cake6,
    title: "3-tier red velvet cake",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    price: "45.90",
    id: 8,
  },
];

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
    <div className={styles.root}>
      <SectionDashedHeading heading="OUR BEST SELLERS" />
      <div className={styles.carouselContainer}>
        <TransparentButton>
          <span className={styles.text}>See All</span>
        </TransparentButton>
        {cards && <Carousel items={cards} itemsToShow={3}></Carousel>}
      </div>
    </div>
  );
}

export default BestSellers;
