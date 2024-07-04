import { Link, useLoaderData } from "react-router-dom";
import noEar from "../assets/images/img1.svg";
import noVue from "../assets/images/img2.svg";
import vieux from "../assets/images/old2.svg";
import fauteuil from "../assets/images/physical-disability-01.svg";
import signe from "../assets/images/img3.svg";
import { Footer } from "../components/Footer";
import arrow from "../assets/images/arrow.svg";

function ShopDetails() {
  const shop = useLoaderData();

  return (
    <>
    <Link to="/Home" className="">
        <button type="button" className="m-5">
          <img src={arrow} alt="fléche de retour en arrière" />
        </button>
      </Link>

      <main className="flex flex-col items-center"></main>
    <main className="flex flex-col items-center m-10">
      <img
        className="rounded-lg w-[22rem] h-[15rem] object-cover"
        src={`${shop.url_image}`}
      ></img>
      <div>
        <h1 className="font-medium text-lg mt-5 text-primary-color">
          {shop.name} - {shop.activite}
        </h1>
        <p>{shop.adresse}</p>
        <h3 className="font-medium text-lg mt-5 text-primary-color">Amménagement</h3>
        {shop.entree_aide_humaine && <p className="font-normal text-[1rem]">Aide humaine possible</p>}
        {shop.station_transport && <p className="font-normal text-[1rem]">Transport en commun à proximité</p>}
        {shop.stationnement_vehicule && <p className="font-normal text-[1rem]">Places de parking au sein de l'établissement</p>}
        {shop.stationnement_handicape && <p className="font-normal text-[1rem]">Places de parking à proximité comprenant des places PMR</p>}
        {shop.entree_vitree && <p className="font-normal text-[1rem]">Porte vitrée avec éléments contrastés sur la partie vitrée</p>}
        {shop.entree_plain_pied && <p className="font-normal text-[1rem]">Chemin vers l'accueil de plain pied</p>}
        {shop.ascenseur && <p className="font-normal text-[1rem]">Ascenseur ou élévateur</p>}
        {shop.entree_balise_sonore && <p className="font-normal text-[1rem]">Balise sonore à l'entrée</p>}
        <p className="font-normal text-[1rem]">Accès rampe : {`${shop.acces_rampe}`}</p>
        <p className="font-normal text-[1rem]">Taille minimale de l'entrée : {`${shop.entree_largeur_mini}`}</p>
        {shop.entree_handicape && <p className="font-normal text-[1rem]">Entrée dédiée aux personnes en situation de handicap</p>}
        <p className="font-normal text-[1rem]">Type de porte : {`${shop.type_de_porte}`}</p>
        {shop.accueil_visible && <p className="font-normal text-[1rem]">Entrée bien visible</p>}
        {shop.sanitaires_adapte && <p className="font-normal text-[1rem]">Sanitaire Adapté</p>}
        {shop.conformite && <p className="font-normal text-[1rem]">Personnel formé</p>}
        {shop.entree_aide_humaine && <div className=" flex justify-center items-center rounded-md p-1 text-primary-color bg-bg-pink font-semibold m-2 shadow-box gap-1  w-[15rem]"><img src={noEar} alt="No Ear Accessibility" /><p>Difficulté a entendre</p></div>}
        {shop.entree_balise_sonore && <div className=" flex justify-center items-center rounded-md p-1 text-primary-color bg-bg-pink font-semibold m-2 shadow-box gap-1 w-[15rem]"><img src={noVue} alt="No Visual Accessibility" /><p>Difficulté a voir</p></div>}
        {shop.ascenseur && <div className=" flex justify-center items-center rounded-md p-1 text-primary-color bg-bg-pink font-semibold m-2 shadow-box gap-1  w-[15rem]"><img src={vieux} alt="Old People Friendly" /><p>Difficulté a marcher</p></div>}
        {shop.entree_largeur_mini && <div className=" flex justify-center items-center rounded-md p-1 text-primary-color bg-bg-pink font-semibold m-2 shadow-box gap-1 w-[15rem]"><img src={fauteuil} alt="Wheelchair Accessible" /><p>En fauteuil roulant</p></div>}
        {shop.entree_aide_humaine && <div className=" flex justify-center items-center rounded-md p-1 text-primary-color bg-bg-pink font-semibold m-2 shadow-box gap-1 w-[15rem]"><img src={signe} alt="Sign Language Available" /><p>Difficulté a comprendre</p></div>}
      </div>
    </main>
      <Footer/>
      </>
  );
}

export default ShopDetails;
