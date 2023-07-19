
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Jelly } from '@uiball/loaders';

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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleCityChange = (city) => {
    setIsTransitioning(true);
    setActiveCity(city);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      const timeline = gsap.timeline();
      timeline.to('.image-carousel', { y: '100%', duration: 0.5, ease: 'power2.inOut' })
        .call(() => {
          setCurrentCity(activeCity);
        })
        .to('.image-carousel', { y: '0%', duration: 0.5, ease: 'power3.out' })
        .call(() => {
          setIsTransitioning(false);
        });
    }
  }, [activeCity, isTransitioning]);

  return (
    <>{isLoading ? (
      <div className="w-full h-screen bg-neutral-100 flex justify-center items-center">
        <Jelly color='#737373' />
      </div>
    ) : (
      <div className="h-screen bg-neutral-100 dark:bg-neutral-900 transition duration-300">
        <NavBar onCityChange={handleCityChange} className="z-50" />
        <div className="image-carousel">
          {currentCity === "BCN" && <ImageCarouselBCN />}
          {currentCity === "MAD" && <ImageCarouselMAD />}
          {currentCity === "TOL" && <ImageCarouselTOL />}
          {currentCity === "PAR" && <ImageCarouselPAR />}
          {currentCity === "BGS" && <ImageCarouselBGS />}
          {currentCity === "XXX" && <ImageCarouselXXX />}
          {currentCity === "ROM" && <ImageCarouselROM />}
        </div>
        <Footer activeCity={activeCity} onCityChange={handleCityChange} />
      </div>
    )
    }
    </>
  );
}

export default App;