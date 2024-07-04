
function Cards() {
  return (
    <article className="flex outline-1 w-[22rem] h-[10rem] p-8 rounded-2xl gap-3 shadow-lg items-center">
            <img src="./src/assets/images/Plat céramique blanche.jpg" alt="test" className="w-32 h-32 rounded"/>
            <div className="flex flex-col">
            <h2 className="text-lg text-primary-color font-medium">Random Name</h2>
            <h3 className="text-sm text-primary-color">Random Adresse</h3>
            <span className="flex gap-5 pt-10">
                <img src="./src/assets/images/NoEyes.svg"></img>
                <img src="./src/assets/images/old2.svg"></img>
                <img src="./src/assets/images/physical-disability-01.svg"></img>
            </span>
            </div>
    </article>
  )
}

export default Cards