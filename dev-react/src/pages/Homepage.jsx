import Cards from "../components/Cards";
import MapComponent from "../components/MapComponent";
import SearchBar from "../components/SearchBar";

function Homepage() {
  return (
    <main>
      <section>
        <MapComponent />
      </section>
        <SearchBar />
      <section className="flex flex-col items-center bottom-10">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </section>
    </main>
  );
}

export default Homepage;
