import BestSellers from "./components/Sections/BestSellers/BestSellers";
import CollectionSection from "./components/Sections/Collections/Collections";
import HeroSection from "./components/Sections/Hero/Hero";
import Navbar from "./components/UIComponents/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CollectionSection />
      <BestSellers />
    </>
  );
}

export default App;
