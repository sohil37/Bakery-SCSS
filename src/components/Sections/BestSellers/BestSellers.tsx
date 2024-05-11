import cake4 from "/images/products/cakes/cake4.png";
import cake5 from "/images/products/cakes/cake5.png";
import cake6 from "/images/products/cakes/cake6.png";

import { BestSellersCardType } from "../../../types/BestSellerCardType";
import BestSellersCard from "../../UIComponents/BestSellersCard/BestSellersCard";
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
];

function BestSellers() {
  return (
    <div className={styles.root}>
      <div className={styles.sectionContainer}>
        <SectionDashedHeading heading="OUR BEST SELLERS" />
        <div className={styles.carouselContainer}>
          <TransparentButton>
            <span className={styles.text}>See All</span>
          </TransparentButton>
          <div className={styles.carousel}>
            {data.map((curCard) => {
              return (
                <BestSellersCard
                  {...curCard}
                  key={curCard.id}
                ></BestSellersCard>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
