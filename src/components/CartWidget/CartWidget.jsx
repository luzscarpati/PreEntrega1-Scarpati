import CartContext from '../../context/CartContext';
import cartImg from './cartWidgetImg/shoppingBag.png';
import { useContext } from 'react';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return <div>CartWidget {cart.length}</div>;
};

/*     <button className="btn btn-outline">
      <i>
        <img src={cartImg} alt="Cart" width="60" height="54" />
      </i>
      <span className="badge text-bg-secondary">1</span>
      <span className="visually-hidden">Productos en carrito</span>
    </button> */


export default CartWidget;
