import { useState } from "react";
import Cards from "../components/Cards";
import FilterButton from "../components/FilterButton";
import MapComponent from "../components/MapComponent";
import SearchBar from "../components/SearchBar";
import Tags from "../components/Tags";

function Homepage() {
  const [cardShop, setCardShop] = useState("");
  const [tagNeed, setTagNeed] = useState("");

  const handleClickShop = () => {
    setCardShop(cardShop);
  };

  const handleClickNeed = () => {
    setTagNeed(tagNeed);
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
      <Tags />
      <section className="flex flex-col items-center bottom-10">
        <Cards />
      </section>
    </main>
  );
}

export default Homepage;
