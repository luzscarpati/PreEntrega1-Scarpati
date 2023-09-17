import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import { getProduct } from "../../services";
import { useParams } from "react-router-dom";
import CartContext from '../../context/CartContext';
import { useContext } from 'react';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const { addItem } = useContext(CartContext);

    useEffect(() => {
        getProduct(id)
          .then((response) => {
            setItem(response);
          })
          .catch(() => {
            setItem(null);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }, [id]);
    

    return (
        <div>
            <ItemDetail item={item} isLoading={isLoading} addItem={addItem}>

            </ItemDetail>
        </div>
    );
};

export default ItemDetailContainer;