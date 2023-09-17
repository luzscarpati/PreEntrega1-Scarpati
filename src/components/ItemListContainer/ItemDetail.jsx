import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import PropTypes from 'prop-types';

const ItemDetail = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "products", "1");

    setIsLoading(true);
    getDoc(itemRef).then((snapshot) => {
      setIsLoading(false);

      if (snapshot.exists()) {
        setItem({
          id: snapshot.id,
          ...snapshot.data(),
        });
      }
    });
  }, []);

  if (isLoading) {
    return (
      <div className="container d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
        <div className="spinner-border text-success" role="status" style={{ width: '4rem', height: '4rem', marginTop: '-20px' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  };

  if (!item) {
    return (
      <div className="container d-flex justify-content-center align-items-start" style={{ height: '80vh' }}>
        <div className="text-center">
         <h4>Producto inexistente</h4>
        </div>
      </div>
    )
  };


  return (
    <div className="container">
      <hr/>
      <h4>Detalle del producto</h4>
      <hr/>
      <div className="row justify-content-center">
        <div className="card col-md-6 mb-4 mx-auto">
          <img src={item.img} alt={item.name} className="card-img-top item-image"/>
          <h6 className="card-title">Nombre: {item.name}</h6>
          <p className="card-text">Descripción: {item.description}</p>
          <p className="card-text">Precio: ${item.price}</p>
          <p className="card-text">Stock: {item.stock}</p>
        </div>
      </div>
    </div>
  );
};
ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
}

export default ItemDetail;