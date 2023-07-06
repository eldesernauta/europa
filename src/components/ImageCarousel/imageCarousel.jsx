import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import image1 from "../../images/_MG_5605-positive-2.jpg";
import image2 from "../../images/_MG_5606-positive-2.jpg";
import image3 from "../../images/_MG_5608-positive-2.jpg";
import image4 from "../../images/_MG_5621-positive-2.jpg";
import image5 from "../../images/_MG_5627-positive-2.jpg";
import image6 from "../../images/_MG_5628-positive-2.jpg";
import image7 from "../../images/_MG_5607-positive-2.jpg";
import image8 from "../../images/_MG_5614-positive-2.jpg";
import image9 from "../../images/_MG_5626-positive-2.jpg";
import image10 from "../../images/_MG_5631-positive-2.jpg";
import image11 from "../../images/_MG_5632-positive-2.jpg";
import image12 from "../../images/_MG_5633-positive.jpg";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

const ImageCarousel = ({ city }) => {
  let images = [];

  // Asigna las imágenes correspondientes a la ciudad seleccionada
  switch (city) {
    case "Barcelona":
      images = [image1, image2];
      break;
    case "Madrid":
      images = [image3, image4];
      break;
    case "Toledo":
      images = [image5, image6];
      break;
    case "Paris":
      images = [image7, image8];
      break;
    case "Brujas":
      images = [image9, image10];
      break;
    case "Amsterdam":
      images = [image11, image12];
      break;
    case "Roma":
      images = [image2, image5];
      break;
    // Agrega más casos para las otras ciudades
    default:
      images = [];
  }

  return (
    <div className="h-5/6 overflow-hidden">
      <div className="relative container mx-auto flex transition-transform duration-500">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          effect="fade"
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full cursor-pointer"
                style={{ width: "100%" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageCarousel;
