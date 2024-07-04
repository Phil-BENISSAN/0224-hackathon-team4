import React from "react";
import noEar from "../assets/images/img1.svg";
import noVue from "../assets/images/img2.svg";
import vieux from "../assets/images/old2.svg";
import fauteuil from "../assets/images/physical-disability-01.svg";
import signe from "../assets/images/img3.svg";

const stepTags = [
  {
    title: "Difficulté à entendre",
    imgSrc: noEar,
  },
  {
    title: "Difficulté à voir",
    imgSrc: noVue,
  },
  {
    title: "Difficulté à marcher",
    imgSrc: vieux,
  },
  {
    title: "En fauteuil roulant",
    imgSrc: fauteuil,
  },
  {
    title: "Difficulté à comprendre",
    imgSrc: signe,
  },
];

function Tags({ handleTagClick }) {
  return (
    <div className="flex flex-wrap justify-center items-center m-2">
      {stepTags.map((info, index) => (
        <button
          key={index}
          type="button"
          className="flex justify-center items-center rounded-md p-1 text-primary-color font-semibold m-2 focus:bg focus:bg-bg-pink shadow-box gap-1"
          onClick={() => handleTagClick(info.title)}
        >
          <img src={info.imgSrc} alt={info.title} />
          {info.title}
        </button>
      ))}
    </div>
  );
}

export default Tags;