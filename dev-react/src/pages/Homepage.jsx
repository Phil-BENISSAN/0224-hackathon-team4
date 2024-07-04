import Cards from "../components/Cards";
import { Footer } from "../components/Footer";
import MapComponent from "../components/MapComponent";


function Homepage() {
  return <main>
    <section className="pb-[65vh]">
   <MapComponent />
   </section>
   <section className="flex flex-col items-center gap-5">
  <Cards/>
  <Cards/>
  <Cards/>
  <Cards/>
  </section>
  <Footer/>
  </main>
}

export default Homepage;
