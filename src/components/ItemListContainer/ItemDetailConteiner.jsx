import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    

    return (
        <div>
            <ItemDetail item={item} isLoading={isLoading} >

            </ItemDetail>
        </div>
    );
};

export default ItemDetailContainer;