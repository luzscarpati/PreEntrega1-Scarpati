const CartWidget = () => {
  return (
    <button className="btn btn-outline">
      <i>
      <img src="./src/components/CartWidget/CartWidgetImg/shoppingBag.png" alt="Cart"  width="60" height="54" />
      </i>
      <span class="badge text-bg-secondary">1</span>
      <span class="visually-hidden">Turnos en cart</span>
    </button>
    
    /*<div>
     
     <span>1</span>
    </div>*/
  );
};

export default CartWidget;
