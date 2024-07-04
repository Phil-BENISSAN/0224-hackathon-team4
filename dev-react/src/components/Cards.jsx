/* eslint-disable react/prop-types */
import noEar from "../assets/images/img1.svg";
import noVue from "../assets/images/img2.svg";
import vieux from "../assets/images/old2.svg";
import fauteuil from "../assets/images/physical-disability-01.svg";
import signe from "../assets/images/img3.svg";


function Cards({item}) {


  return (
    <article className="flex w-[22rem] h-[10rem] m-5 rounded-2xl gap-3 shadow-box items-center mb-1 p-3">
            <img src={`${item.url_image}`} alt="test" className="w-32 h-32 rounded object-cover"/>
            <span className="flex flex-col gap-2">
              <div>
            <h2 className="text-lg text-primary-color font-medium w-32 truncate">{item.name}</h2>
            </div>
            <h2 className=" text-primary-color font-medium w-32 truncate"> {item.activite} </h2>
            <h3 className="text-sm text-primary-color">{item.adresse}</h3>
            <span className="flex gap-5">
            {item.entree_aide_humaine && <img src={noEar} alt="No Ear Accessibility" />}
        {item.entree_balise_sonore && <img src={noVue} alt="No Visual Accessibility" />}
        {item.ascenseur && <img src={vieux} alt="Old People Friendly" />}
        {item.entree_largeur_mini && <img src={fauteuil} alt="Wheelchair Accessible" />}
        {item.entree_aide_humaine && <img src={signe} alt="Sign Language Available" />}
            </span>
            </span>
    </article>
  )
}

export default Cards