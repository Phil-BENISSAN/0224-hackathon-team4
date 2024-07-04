import loupe from "../assets/images/loupe.svg";
import micro from "../assets/images/micro.svg";

function SearchBar() {
  return (
    <form className="flex justify-center items-center" >

        <img src={loupe} alt="" />
        <input
          name="search"
          id="search"
          type="search"
          placeholder="Saisis ton adresse"
          className="bg-bg-grey w-60 h-10"
        />
        <img src={micro} alt="" />
      </form>
  )
}


export default SearchBar