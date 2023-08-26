const CartWidget = () => {
  return (
    <button className="btn btn-outline">
      <i>
      <img src="./src/components/CartWidget/CartWidgetImg/shoppingBag.png" alt="Cart"  width="60" height="54" />
      </i>
      <span className="badge text-bg-secondary">1</span>
      <span className="visually-hidden">Productos en carrito</span>
    </button>
  );
};

export default CartWidget;
