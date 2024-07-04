import { useState } from "react";
import Cards from "../components/Cards";
import FilterButton from "../components/FilterButton";
import MapComponent from "../components/MapComponent";
import SearchBar from "../components/SearchBar";
import Tags from "../components/Tags";

function Homepage() {
  const [showCards, setShowCards] = useState(true);

  const handleClickShop = () => {
    setShowCards(true);
  };

  const handleClickNeed = () => {
    setShowCards(false);
  };

  return (
    <main>
      <section>
        <MapComponent />
      </section>
      <SearchBar />
      <FilterButton
        handleClickNeed={handleClickNeed}
        handleClickShop={handleClickShop}
      />

      <section className="flex flex-col items-center bottom-10">
        {showCards ? <Cards /> : <Tags />}
      </section>
    </main>
  );
}

export default Homepage;
