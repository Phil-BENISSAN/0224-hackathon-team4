import Cards from "../components/Cards";
import MapComponent from "../components/MapComponent";

function Homepage() {
  return <main>
    <section>
   <MapComponent />
   </section>
   <section className="flex flex-col items-center z-index bottom-10">
  <Cards/>
  <Cards/>
  <Cards/>
  <Cards/>
  </section>
  </main>
}

export default Homepage;
