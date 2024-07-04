import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import dataset from "../../data.json";

import noEar from "../assets/images/img1.svg";
import noVue from "../assets/images/img2.svg";
import vieux from "../assets/images/old2.svg";
import fauteuil from "../assets/images/physical-disability-01.svg";
import signe from "../assets/images/img3.svg";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "./src/assets/images/marker.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});



const MapComponent = () => {
  const [position, setPosition] = useState([44.8694507, -0.565266]);
  const data = dataset.Sheet1 || [];
  const limitedData = data.slice(0, 50);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setPosition([latitude, longitude]);
    });
  }, []);

  return (
    <MapContainer
      className="fixed"
      center={position}
      zoom={13}
      style={{ height: "55vh", width: "100%", margin: "auto auto 2rem auto" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Vous êtes ici !</Popup>
      </Marker>
      {limitedData.map((item) => (
        <Marker position={[item.latitude, item.longitude]} key={item.id}>
          <Popup>
            <img
              className="w-32 h-32 object-cover"
              src={`${item.url_image}`}
            ></img>
            <div className="flex flex-col">
              <h3 className="font-medium text-primary-color">{`${item.name}`}</h3>
              <h3 className=" text-primary-color">{`${item.activite}`}</h3>
              <div className="flex gap-5 mt-3">
              {item.entree_aide_humaine && <img className="w-5" src={noEar} alt="No Ear Accessibility" />}
        {item.entree_balise_sonore && <img className="w-5" src={noVue} alt="No Visual Accessibility" />}
        {item.ascenseur && <img className="w-5" src={vieux} alt="Old People Friendly" />}
        {item.entree_largeur_mini && <img className="w-5" src={fauteuil} alt="Wheelchair Accessible" />}
        {item.entree_aide_humaine && <img className="w-5" src={signe} alt="Sign Language Available" />}
            </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
