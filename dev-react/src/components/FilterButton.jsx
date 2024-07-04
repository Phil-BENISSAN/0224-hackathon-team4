function FilterButton({ handleClickNeed, handleClickShop, activeTab }) {
  return (
    <div className="flex justify-evenly items-center mt-5">
      <button
        type="button"
        className={`border-2 border-primary-color rounded-md p-1 font-semibold w-32 ${
          activeTab === 'shop'
            ? 'bg-primary-color text-white'
            : 'text-primary-color'
        }`}
        onClick={handleClickShop}
      >
        Établissements
      </button>
      <button
        onClick={handleClickNeed}
        type="button"
        className={`border-2 border-primary-color rounded-md p-1 font-semibold w-32 ${
          activeTab === 'need'
            ? 'bg-primary-color text-white'
            : 'text-primary-color'
        }`}
      >
        Besoins
      </button>
    </div>
  );
}

export default FilterButton;