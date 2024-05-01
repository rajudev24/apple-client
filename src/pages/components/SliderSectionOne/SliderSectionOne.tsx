import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import image1 from "/public/imgs/pic-11.png";
import image2 from "/public/imgs/pic-12.png";
import image3 from "/public/imgs/pic-10.png";
import image4 from "/public/imgs/pic-11.png";
import image5 from "/public/imgs/pic-8.png";
import image6 from "/public/imgs/pic-9.png";
import Image from "next/image";
import { useState } from "react";

const sliderData = [image1, image2, image3, image4, image5, image6];

const SliderSectionOne = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <Swiper
      modules={[Pagination, A11y]}
      spaceBetween={0}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={handleSlideChange}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="mt-4"
    >
      {sliderData &&
        sliderData.map((image, index) => (
          <SwiperSlide key={index} className="pb-8">
            <div
              className={`relative flex justify-center ${
                currentIndex === index
                  ? "opacity-50"
                  : currentIndex === index - 1 || currentIndex === index + 1
                  ? ""
                  : "opacity-50"
              }`}
            >
              <Image src={image} alt="image" />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SliderSectionOne;
