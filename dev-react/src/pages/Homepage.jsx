import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import MapComponent from "../components/MapComponent";
import dataset from "../../data.json";
import SearchBar from "../components/SearchBar";
import FilterButton from "../components/FilterButton";
import Tags from "../components/Tags";

function Homepage() {
  const [activeTab, setActiveTab] = useState("shop");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [activeTag, setActiveTag] = useState("");

  const data = dataset.Sheet1 || [];

  useEffect(() => {
    filterData();
  }, [searchQuery, activeTag]);

  const filterData = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    let filtered = data.filter((item) =>
      item.activite.toLowerCase().includes(lowerCaseQuery)
    );

    if (activeTag) {
      filtered = filtered.filter((item) => {
        // Ajoutez ici la logique pour filtrer en fonction du tag actif
        switch (activeTag) {
          case "Difficulté à entendre":
            return item.entree_aide_humaine;
          case "Difficulté à voir":
            return item.entree_balise_sonore;
          case "Difficulté à marcher":
            return item.ascenseur;
          case "En fauteuil roulant":
            return item.entree_largeur_mini;
          case "Difficulté à comprendre":
            return item.entree_aide_humaine; // Mettre la logique appropriée
          default:
            return false;
        }
      });
    }

    setFilteredData(filtered);
  };

  const handleClickShop = () => {
    setActiveTab("shop");
  };

  const handleClickNeed = () => {
    setActiveTab("need");
  };

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  const handleSubmit = () => {
    filterData();
  };

  useEffect(() => {
    setActiveTab("shop");
  }, []);

  return (
    <main>
      <section className="pb-[60vh]">
        <MapComponent />
      </section>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSubmit={handleSubmit}
      />
      <FilterButton
        handleClickNeed={handleClickNeed}
        handleClickShop={handleClickShop}
        activeTab={activeTab}
      />
      <section className="flex flex-col items-center bottom-10">
        {activeTab === 'shop' ? (
          <section className="flex flex-col items-center">
            {filteredData.map((item) => (
              <Link to={`/shop/${item.id}`} key={item.id}>
                <Cards item={item} />
              </Link>
            ))}
          </section>
        ) : (
          <Tags handleTagClick={handleTagClick} />
        )}
      </section>
    </main>
  );
}

export default Homepage;