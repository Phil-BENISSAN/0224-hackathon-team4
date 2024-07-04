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

      <main className="flex flex-col items-center">
        <img
          className="rounded-lg w-[22rem] h-[15rem] object-cover"
          src={`${shop.url_image}`}
        ></img>
        <div>
          <h1 className="font-medium text-lg mt-5 text-primary-color">
            {shop.name} - {shop.activite}
          </h1>
          <p className="mb-5">{shop.adresse}</p>

          {shop.entree_aide_humaine && (
            <div className=" flex justify-center items-center rounded-md p-1 text-primary-color bg-bg-pink font-semibold m-2 shadow-box gap-1  w-[15rem]">
              <img src={noEar} alt="No Ear Accessibility" />
              <p>Difficulté a entendre</p>
            </div>
          )}
          {shop.entree_balise_sonore && (
            <div className=" flex justify-center items-center rounded-md p-1 text-primary-color bg-bg-pink font-semibold m-2 shadow-box gap-1 w-[15rem]">
              <img src={noVue} alt="No Visual Accessibility" />
              <p>Difficulté a voir</p>
            </div>
          )}
          {shop.ascenseur && (
            <div className=" flex justify-center items-center rounded-md p-1 text-primary-color bg-bg-pink font-semibold m-2 shadow-box gap-1  w-[15rem]">
              <img src={vieux} alt="Old People Friendly" />
              <p>Difficulté a marché</p>
            </div>
          )}
          {shop.entree_largeur_mini && (
            <div className=" flex justify-center items-center rounded-md p-1 text-primary-color bg-bg-pink font-semibold m-2 shadow-box gap-1 w-[15rem]">
              <img src={fauteuil} alt="Wheelchair Accessible" />
              <p>En fauteuil roulant</p>
            </div>
          )}
          {shop.entree_aide_humaine && (
            <div className=" flex justify-center items-center rounded-md p-1 text-primary-color bg-bg-pink font-semibold m-2 shadow-box gap-1 w-[15rem]">
              <img src={signe} alt="Sign Language Available" />
              <p>Difficulté a comprendre</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ShopDetails;
