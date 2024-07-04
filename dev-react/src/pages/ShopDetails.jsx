import { useLoaderData } from 'react-router-dom';

function ShopDetails() {
  const shop = useLoaderData();

  return (
    <div>
        <img src={`${shop.url_image}`}></img>
      <h1>{shop.name}</h1>
      <p>{shop.adresse}</p>
    </div>
  );
}

export default ShopDetails;
