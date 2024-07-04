import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../assets/styles/slider.css";
import { Autoplay } from "swiper/modules";
import etape1 from "../assets/images/etape1.svg";
import etape2 from "../assets/images/etape2.svg";
import etape3 from "../assets/images/etape3.svg";

const stepList = [
  {
    title: "Etape 1",
    imgSrc: etape1,
    name: "etape1",
    text: "Saisis ton adresse ou Géolocalise-toi pour afficher les lieux inclusifs autour de toi",
  },
  {
    title: "Etape 2",
    imgSrc: etape2,
    name: "etape2",
    text: "Consulte les fiches des établissements et sélectionnes celui qui te correspond",
  },
  {
    title: "Etape 3",
    imgSrc: etape3,
    name: "etape3",
    text: "Rends toi dans l'établissement de ton choix et profite !",
  },
];

export default function Slider() {
  return (
    <Swiper
      spaceBetween={60}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop
      modules={[Autoplay]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 60,
        },
      }}
    >
      {stepList.map((info) => (
        <SwiperSlide key={info.name}>
          <div className="flex flex-col justify-center items-center bg-bg-blue rounded-md my-4 w-80 h-96">
            <h2>{info.title}</h2>
            <img
              src={info.imgSrc}
              alt={info.name}
              className="block w-60 h-60 object-cover"
            />
            <p className="w-64 h-10 text-center text-white mb-8"> {info.text} </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
