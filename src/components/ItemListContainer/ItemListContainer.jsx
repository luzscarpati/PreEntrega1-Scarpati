import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getProducts } from "../../services";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {
  const [list, setList] = useState([]);
  const {categoryId} = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
      setIsLoading(true);
      getProducts(categoryId).then((response) =>{
        setList(response);
        setIsLoading(false);
      });
  }, [categoryId])

 return (
    <div>
      <h2 className="text-center w-100">{greeting}</h2>
      <ItemList list={list} isLoading={isLoading}/>
    </div> 
  )   
};

export default ItemListContainer;
