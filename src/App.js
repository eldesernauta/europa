import { useState } from 'react';

import './index.css';
import ImageCarouselBCN from './components/ImageCarousels/imageCarouselBCN';
import ImageCarouselMAD from './components/ImageCarousels/imageCarouselMAD';
import ImageCarouselTOL from './components/ImageCarousels/imageCarouselTOL';
import ImageCarouselPAR from './components/ImageCarousels/imageCarouselPAR';
import ImageCarouselBGS from './components/ImageCarousels/imageCarouselBGS';
import ImageCarouselXXX from './components/ImageCarousels/imageCarouselXXX';
import ImageCarouselROM from './components/ImageCarousels/imageCarouselROM';
import NavBar from "./components/NavBar/navBar";
import Footer from './components/Footer/footer';

function App() {
  const [activeCity, setActiveCity] = useState("");
  const [currentCity, setCurrentCity] = useState("BCN");

  const handleCityChange = (city) => {
    setCurrentCity(city);
    setActiveCity(city);
  };



  return (
    <div className="h-screen bg-neutral-100 dark:bg-neutral-900 transition duration-300">
      <NavBar onCityChange={handleCityChange} />
      {currentCity === "BCN" && <ImageCarouselBCN />}
      {currentCity === "MAD" && <ImageCarouselMAD />}
      {currentCity === "TOL" && <ImageCarouselTOL />}
      {currentCity === "PAR" && <ImageCarouselPAR />}
      {currentCity === "BGS" && <ImageCarouselBGS />}
      {currentCity === "XXX" && <ImageCarouselXXX />}
      {currentCity === "ROM" && <ImageCarouselROM />}
      <Footer activeCity={activeCity} onCityChange={handleCityChange} />
    </div>
  );
}

export default App;
