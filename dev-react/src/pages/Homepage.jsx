import Cards from "../components/Cards";
import MapComponent from "../components/MapComponent";
import SearchBar from "../components/SearchBar";


function Homepage() {
  return <main>
   <MapComponent />
   <SearchBar />
   <section className="flex flex-col items-center">
  <Cards/>
  </section>
  </main>
}

export default Homepage;
