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
  const { cart, clear } = useContext(CartContext);
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
      });
  };

  return (
    <div className="container justify-content-center">
      <h5 className="d-block mb-3">Resumen de la compra</h5>
      {orderId && <p>El Número de la compra es: {orderId}</p>}
      {!orderId && (
        <div>
          <BuyerInfoForm
            buyerInfo={buyerInfo}
            setBuyerInfo={setBuyerInfo}
            sendDataToCheckout={sendDataToCheckout}
          />
        <hr/>
          <h6>Productos en el carrito:</h6>
          <ul className='justify-content-center'>
            {cart.map((item) => (
              <li key={item.id}>
                <p>Nombre del producto: {item.name}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio por unidad: ${item.price}</p>
                <p>Subtotal: ${item.price * item.quantity}</p>
                <hr className={styles["short-hr"]}/>
                <hr/>
              </li>
            ))}
          </ul>

          <span>Total de la compra: ${getCartTotal(cart)}</span>

          <button onClick={handleCheckOut} disabled={isCartEmpty || !isFormComplete} className='btn btn-success d-block mb-3'>Realizar Compra</button>
        </div>
      )}
    </div>
  );
};

export default CheckOut;

