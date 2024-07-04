
function Cards() {
  return (
    <article className="flex outline w-[22] h-[10] p-8 m-[15%] rounded-md gap-5">
            <img src="./src/assets/images/logo-favicon.svg" alt="test" className="w-32"/>
            <div className="flex flex-col">
            <h2 className="">Random Name</h2>
            <h2>Random Commerce</h2>
            <h3>Random Adresse</h3>
            </div>
    </article>
  )
}

export default Cards