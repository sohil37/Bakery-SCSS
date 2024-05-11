import BestSellers from "./components/Sections/BestSellers/BestSellers";
import CollectionSection from "./components/Sections/Collections/Collections";
import HeroSection from "./components/Sections/Hero/Hero";
import NewArticles from "./components/Sections/NewArticles/NewArticles";
import Navbar from "./components/UIComponents/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CollectionSection />
      <BestSellers />
      <NewArticles />
    </>
  );
}

export default App;
