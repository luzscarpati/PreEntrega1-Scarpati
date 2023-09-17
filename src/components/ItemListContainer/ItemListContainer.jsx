import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from '../../services';
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getProducts(categoryId).then((response) => {
      setItems(response);
      setIsLoading(false);
    });
  }, [categoryId]);

  return (
    <div>
      <h2 className="text-center w-100">Mira todos los productos</h2>
      <ItemList list={items} isLoading={isLoading} />
    </div>
  )
};

export default ItemListContainer;
