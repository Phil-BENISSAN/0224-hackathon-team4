/* eslint-disable react/prop-types */



function Cards({item}) {
  return (
    <article className="flex w-[22rem] h-[10rem] m-5 rounded-2xl gap-3 shadow-lg items-center mb-1 overflow-hidden">
            <img src={`${item.url_image}`} alt="test" className="w-32 h-32 rounded"/>
            <span className="flex flex-col gap-3">
              <div>
            <h2 className="text-lg text-primary-color font-medium overflow-hidden object-cover w-32">{item.name}</h2>
            </div>
            <h3 className="text-sm text-primary-color">{item.adresse}</h3>
            <span className="flex gap-5">
                <img src="./src/assets/images/NoEyes.svg"></img>
                <img src="./src/assets/images/old2.svg"></img>
                <img src="./src/assets/images/physical-disability-01.svg"></img>
            </span>
            </span>
    </article>
  )
}

export default Cards