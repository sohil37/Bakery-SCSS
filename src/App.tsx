import BestSellers from "./components/Sections/BestSellers/BestSellers";
import CollectionSection from "./components/Sections/Collections/Collections";
import HeroSection from "./components/Sections/Hero/Hero";
import NewArticles from "./components/Sections/NewArticles/NewArticles";
import OurCustomers from "./components/Sections/OurCustomers/OurCustomers";
import Navbar from "./components/UIComponents/Navbar/Navbar";
import styles from "./styles/App.module.scss";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className={styles.sections}>
        <CollectionSection />
        <BestSellers />
        <NewArticles />
        <OurCustomers />
      </div>
    </>
  );
}

export default App;
