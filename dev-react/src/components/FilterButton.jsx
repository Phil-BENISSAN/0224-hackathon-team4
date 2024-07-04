function FilterButton( {handleClickNeed, handleClickShop} ) {
  return (
    <div className="flex justify-evenly items-center my-5">
      <button
        type="button"
        className="border-2 border-primary-color rounded-md p-1 text-primary-color font-semibold w-32 focus:bg focus:bg-primary-color focus:text focus:text-white"
        onClick={handleClickShop}
     >
        Établissements
      </button>
      <button
        onClick={handleClickNeed}
        type="button"
        className="border-2 border-primary-color rounded-md p-1 text-primary-color font-semibold w-32 focus:bg focus:bg-primary-color focus:text focus:text-white"
      >
        Besoins
      </button>
    </div>
  );
}

export default FilterButton;
