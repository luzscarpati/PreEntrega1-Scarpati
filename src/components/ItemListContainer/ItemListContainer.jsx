import { useState, useEffect } from "react";
import { getProducts } from "../../services";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {
  const [list, setList] = useState([]);

  useEffect(() =>{
      getProducts().then((response) =>{
        setList(response);
      });
  }, [])

 return (
    <div>
      <h2 className="text-center">{greeting}</h2>
      <ItemList list={list} />
    </div> 
  )   
};

export default ItemListContainer;
