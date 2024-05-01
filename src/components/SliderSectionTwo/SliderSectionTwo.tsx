import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import image1 from "/public/imgs/pic-8.png";
import image2 from "/public/imgs/pic-9.png";
import image3 from "/public/imgs/pic-10.png";
import image4 from "/public/imgs/pic-11.png";
import image5 from "/public/imgs/pic-8.png";
import image6 from "/public/imgs/pic-9.png";
import Image from "next/image";
import { MdOutlineArrowRight } from "react-icons/md";
import { MdOutlineArrowLeft } from "react-icons/md";

const sliderData = [
  {
    image: image1,
    content: "Run Your First 10K",
  },
  {
    image: image2,
    content: "Rap Life",
  },
  {
    image: image3,
    content: "NBA 2K24 Arcade Edition",
  },
  {
    image: image4,
    content: "Core with Jenn",
  },
  {
    image: image5,
    content: "Run Your First 10K",
  },
  {
    image: image6,
    content: "Run Your First 10K",
  },
];

const SliderSectionTwo = () => {
  const CustomPrevButton = ({ onClick }: { onClick: () => void }) => (
    <button
      onClick={onClick}
      className="prev-button bg-slate-200 rounded-full ml-4"
    >
      <MdOutlineArrowLeft size={20} />
    </button>
  );

  const CustomNextButton = ({ onClick }: { onClick: () => void }) => (
    <button
      onClick={onClick}
      className="next-button bg-slate-200 rounded-full absolute right-0 mt-2 mr-4 transform -translate-y-1/2"
    >
      <MdOutlineArrowRight size={20} />
    </button>
  );

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      navigation={{
        prevEl: ".prev-button",
        nextEl: ".next-button",
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="relative "
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {sliderData &&
        sliderData.map((slider, index) => (
          <SwiperSlide key={index} className="pb-2">
            <div className="relative">
              <Image src={slider.image} alt="image" width={800} />
              <p
                className={`absolute text-white text-sm font-semibold ${
                  index === 1 ? "top-1/2 right-1/3" : "bottom-3 left-3"
                } `}
              >
                {slider.content}{" "}
              </p>
            </div>
          </SwiperSlide>
        ))}
      <CustomPrevButton onClick={() => {}} />
      <CustomNextButton onClick={() => {}} />
    </Swiper>
  );
};

export default SliderSectionTwo;
