import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { Footer } from "../components/Footer";
import MapComponent from "../components/MapComponent";
import dataset from "../../data.json";
import SearchBar from "../components/SearchBar";
import FilterButton from "../components/FilterButton";
import Tags from "../components/Tags";

function Homepage() {
  const [activeTab, setActiveTab] = useState('shop');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  
  const data = dataset.Sheet1 || [];
  
  useEffect(() => {
    filterData();
  }, [searchQuery]);

  const filterData = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = data.filter(item =>
      item.activite.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredData(filtered);
  };

  const handleClickShop = () => {
    setActiveTab('shop');
  };

  const handleClickNeed = () => {
    setActiveTab('need');
  };

  const handleSubmit = () => {
    filterData();
  };

  useEffect(() => {
    setActiveTab('shop');
  }, []);

  return (
    <main>
      <section className="pb-[65vh]">
        <MapComponent />
      </section>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSubmit={handleSubmit}/>
      <FilterButton
        handleClickNeed={handleClickNeed}
        handleClickShop={handleClickShop}
        activeTab={activeTab}
      />
      <section className="flex flex-col items-center bottom-10">
        {activeTab === 'shop' ? (
          <section className="flex flex-col items-center gap-5">
            {filteredData.map((item) => (
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