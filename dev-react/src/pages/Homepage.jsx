import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import { Footer } from "../components/Footer";
import MapComponent from "../components/MapComponent";
import dataset from "../../data.json";
import SearchBar from "../components/SearchBar"
import FilterButton from "../components/FilterButton"
import Tags from "../components/Tags"
import { useEffect, useState } from "react";

function Homepage() {
  const [activeTab, setActiveTab] = useState('shop');

  const handleClickShop = () => {
    setActiveTab('shop');
  };

  const handleClickNeed = () => {
    setActiveTab('need');
  };

  useEffect(() => {
    setActiveTab('shop');
  }, []);

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
        activeTab={activeTab} 
      />
      <section className="flex flex-col items-center bottom-10">
        {activeTab === 'shop' ? (
          <section className="flex flex-col items-center gap-5">
            {limitedData.map((item) => (
              <Link to={`/shop/${item.id}`} key={item.id}>
                <Cards item={item} />
              </Link>
            ))}
          </section>
        ) : (
          <Tags />
        )}
      </section>
      <Footer />
    </main>
  );
}

export default Homepage;