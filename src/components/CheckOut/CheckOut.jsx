import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { getCartTotal } from "../../../../utils";
import { serverTimestamp } from 'firebase/firestore';
import { mapCartToOrderItems } from "../../../../utils";
import { createOrder } from "../../services";

const CheckOut = () => {
    const [orderId, setOrderId] = useState(null);
    const { cart, clear } = useContext(CartContext);
    const handleCheckOut = () => {
        const order = {
            buyer: {
              name: "John",
              phone: "123456789",
              email: "john@gmail.com",
            },
            items: mapCartToOrderItems(cart),
            date: serverTimestamp(),
          };
    createOrder(order)
       .then((docRef) => {
            setOrderId(docRef.id);
            clear();
       }) ;
    }
    return (
        <div>
            <h2>Resumen de la compra</h2>
            {orderId && <p>El Número de la compra es: {orderId}</p>}
            {!orderId && (
                <div>
                    <ul>
                     {cart.map((item) => (
                      <li key={item.id}>
                        <p>Nombre del producto: {item.name}</p>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio por unidad: ${item.price}</p>
                        <p>Subtotal: ${item.price * item.quantity}</p>
                        <hr/>
                      </li>
                     ))}
                    </ul>
            <span>Total de la compra: ${getCartTotal(cart)}</span>
            <button onClick={handleCheckOut}>Realizar Compra</button>
                </div>
            )}
        </div>
    )
};

export default CheckOut;