import loupe from "../assets/images/loupe.svg";
import micro from "../assets/images/micro.svg";

function SearchBar() {
  return (
    <form className="flex justify-center items-center">
      <button type="submit" className="bg-bg-grey w-10 h-10 rounded-l-lg flex justify-center items-center">
        <img src={loupe} alt="loupe" />
      </button>
      <input
        name="search"
        id="search"
        type="search"
        placeholder="Saisis ton adresse"
        className="bg-bg-grey w-60 h-10 pl-1 text-primary-color font-semibold"
      />
      <button type="radio" className="bg-bg-grey h-10 w-10 rounded-r-lg flex justify-center items-center">
        <img src={micro} alt="microphone" />
      </button>
    </form>
  );
}

export default SearchBar;
