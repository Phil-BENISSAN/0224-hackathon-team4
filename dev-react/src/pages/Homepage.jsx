import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import { Footer } from "../components/Footer";
import MapComponent from "../components/MapComponent";
import dataset from "../../data.json";
import SearchBar from "../components/SearchBar"
import FilterButton from "../components/FilterButton"
import Tags from "../components/Tags"
import { useState } from "react";


function Homepage() {
  const [cardShop, setCardShop] = useState("");
  const [tagNeed, setTagNeed] = useState("");

  const handleClickShop = () => {
    setCardShop(cardShop);
  };

  const handleClickNeed = () => {
    setTagNeed(tagNeed);
  };

  const data = dataset.Sheet1 || [];
  const limitedData = data.slice(0, 20);
  return (
    <main>
      <section className="pb-[65vh]">
        <MapComponent />
      </section>
      <SearchBar />
      <FilterButton
        handleClickNeed={handleClickNeed}
        handleClickShop={handleClickShop}
      />
      <Tags />
      <section className="flex flex-col items-center gap-5">
        {limitedData.map((item) => (
          <Link to={`/shop/${item.id}`} key={item.id}>
            <Cards item={item} />
          </Link>
        ))}
      </section>
      <Footer />
    </main>
  );
}

export default Homepage;
