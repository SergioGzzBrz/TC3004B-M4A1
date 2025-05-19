import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const ItemInfo = ({ items }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const item = items.find((item) => item.id === id);
  return (
    <div>
      <h1>Item Info for id: {id}</h1>
      <h2>Name: {item.name}</h2>
      <h3>Price: {item.price}</h3>
      <h3>Search param: {searchParams.get("q")}</h3>
      <button onClick={() => navigate(-1)}>Go back!</button>
    </div>
  );
};

export default ItemInfo;
