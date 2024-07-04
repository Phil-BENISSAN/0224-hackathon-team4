import img1 from "../assets/images/img1.svg";
import img2 from "../assets/images/img2.svg";
import img3 from "../assets/images/old2.svg";
import img4 from "../assets/images/physical-disability-01.svg";
import img5 from "../assets/images/img3.svg";

const stepTags = [
  {
    title: "Difficulté à entendre",
    imgSrc: img1,
  },
  {
    title: "Difficulté à voir",
    imgSrc: img2,
  },
  {
    title: "Difficulté à marcher",
    imgSrc: img3,
  },
  {
    title: "En fauteuil roulant",
    imgSrc: img4,
  },
  {
    title: "Difficulté à comprendre",
    imgSrc: img5,
  },
];

function Tags() {
  return (
    <div className="flex flex-wrap justify-center items-center m-2">
      {stepTags.map((info, index) => (
        <button
        key={index}
          type="button"
          className=" flex justify-center items-center rounded-md p-1 text-primary-color font-semibold m-2 focus:bg focus:bg-bg-pink shadow-box gap-1"
        >
          <img src={info.imgSrc} alt={info.title} />
          {info.title}
        </button>
      ))}
    </div>
  );
}

export default Tags;
