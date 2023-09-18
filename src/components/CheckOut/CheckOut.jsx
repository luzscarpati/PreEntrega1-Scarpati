import React, { useState, useContext } from "react";
import BuyerInfoForm from '../BuyerForm/BuyerInfoForm'
import CartContext from "../../context/CartContext";
import { getCartTotal } from "../../../../utils";
import { serverTimestamp } from 'firebase/firestore';
import { mapCartToOrderItems } from "../../../../utils";
import { createOrder } from "../../services";

const CheckOut = () => {
  const [orderId, setOrderId] = useState(null);
  const { cart, clear } = useContext(CartContext);
  const [buyerInfo, setBuyerInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

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
      console.log(createOrder(order));
  };

  return (
    <div>
      <h2>Resumen de la compra</h2>
      {orderId && <p>El Número de la compra es: {orderId}</p>}
      {!orderId && (
        <div>
          <BuyerInfoForm
            buyerInfo={buyerInfo}
            setBuyerInfo={setBuyerInfo}
            sendDataToCheckout={sendDataToCheckout}
          />

          <h3>Productos en el carrito:</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <p>Nombre del producto: {item.name}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio por unidad: ${item.price}</p>
                <p>Subtotal: ${item.price * item.quantity}</p>
              </li>
            ))}
          </ul>

          <span>Total de la compra: ${getCartTotal(cart)}</span>

          <button onClick={handleCheckOut}>Realizar Compra</button>
        </div>
      )}
    </div>
  );
};

export default CheckOut;

