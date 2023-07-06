import { useState } from 'react';

import './index.css';
import ImageCarousel from './components/ImageCarousel/imageCarousel';
import NavBar from "./components/NavBar/navBar";
import Footer from './components/Footer/footer';

function App() {

  const [currentCity, setCurrentCity] = useState(null);

  const handleCityChange = (city) => {
    setCurrentCity(city);
  };
  return (
    <div className="h-screen bg-neutral-100 dark:bg-neutral-900 transition duration-300">
      <NavBar />
      <ImageCarousel city={currentCity} />
      <Footer onCityChange={handleCityChange} />
    </div>
  );
}

export default App;
