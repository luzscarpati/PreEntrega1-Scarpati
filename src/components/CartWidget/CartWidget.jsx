import CartContext from '../../context/CartContext';
import cartImg from './cartWidgetImg/shoppingBag.png';
import { useContext } from 'react';
import { getCartQuantity } from '../../../../utils';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const quantity = getCartQuantity(cart);

  return (
    <div>
      <Link to="/checkout"><img src={cartImg} alt="Cart" width="60" height="54" /></Link>
      <span className={`badge text-bg-secondary ${quantity === 0 ? 'd-none' : ''}`}>{!!quantity && quantity} </span>
      <span className="visually-hidden">Productos en carrito</span>
    </div>
  )};

/*     <button className="btn btn-outline">
      <i>
        <img src={cartImg} alt="Cart" width="60" height="54" />
      </i>
      <span className="badge text-bg-secondary">1</span>
      <span className="visually-hidden">Productos en carrito</span>
    </button> */


export default CartWidget;
