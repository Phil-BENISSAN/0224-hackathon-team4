import Cards from "../components/Cards";
import MapComponent from "../components/MapComponent";


function Homepage() {
  return <main>
   <MapComponent />
   <section className="flex flex-col items-center">
  <Cards/>
  </section>
  </main>
}

export default Homepage;
