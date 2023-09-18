import React, { useState, useContext } from "react";
import BuyerInfoForm from '../BuyerForm/BuyerInfoForm'
import CartContext from "../../context/CartContext";
import { getCartTotal } from "../../../../utils";
import { serverTimestamp } from 'firebase/firestore';
import { mapCartToOrderItems } from "../../../../utils";
import { createOrder } from "../../services";
import styles from './CheckOut.module.css'

const CheckOut = () => {
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false); // Inicialmente, el loading está desactivado
  const { cart, clear, removeItem } = useContext(CartContext);
  const [buyerInfo, setBuyerInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const isFormComplete = buyerInfo.name && buyerInfo.email && buyerInfo.phone;
  const isCartEmpty = cart.length === 0;
  const sendDataToCheckout = (data) => {
    setBuyerInfo({
      name: data.name,
      email: data.email,
      phone: data.phone,
    });
  };

  const handleCheckOut = () => {
    setLoading(true);

    const order = {
      buyer: {
        name: buyerInfo.name,
        phone: buyerInfo.phone,
        email: buyerInfo.email,
      },
      items: mapCartToOrderItems(cart),
      date: serverTimestamp(),
    };

    createOrder(order)
      .then((docRef) => {
        setOrderId(docRef.id);
        clear();
        setLoading(false);
      });
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  return (
    <div className="container justify-content-center">
      <h5 className="d-block mb-3">Resumen de la compra</h5>
      {loading ? (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
          <div className="spinner-border text-success" role="status" style={{ width: '4rem', height: '4rem', marginTop: '-20px' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {orderId && <p>El Número de la compra es: {orderId}</p>}
          {!orderId && (
            <div>
              <BuyerInfoForm
                buyerInfo={buyerInfo}
                setBuyerInfo={setBuyerInfo}
                sendDataToCheckout={sendDataToCheckout}
              />
              <hr />
              <h6>Productos en el carrito:</h6>
              <ul className='justify-content-center'>
                {cart.map((item) => (
                  <li key={item.id}>
                    <p>Nombre del producto: {item.name}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio por unidad: ${item.price}</p>
                    <p>Subtotal: ${item.price * item.quantity}</p>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="btn btn-danger"
                    >
                      Eliminar
                    </button>
                    <hr className={styles["short-hr"]}/>
                    <hr/>
                  </li>
                ))}
              </ul>
              <span>Total de la compra: ${getCartTotal(cart)}</span>
              <button onClick={handleCheckOut} disabled={isCartEmpty || !isFormComplete} className='btn btn-success d-block mb-3'>Realizar Compra</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default CheckOut;










