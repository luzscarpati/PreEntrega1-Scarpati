import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import { getProduct } from "../../services";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);

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
            <ItemDetail item={item} isLoading={isLoading} >

            </ItemDetail>
        </div>
    );
};

export default ItemDetailContainer;