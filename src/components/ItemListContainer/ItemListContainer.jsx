import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {
 return (
    <div>
      <h2 className="text-center">{greeting}</h2>
      <ItemList/>
    </div> 
  )   
};

export default ItemListContainer;
