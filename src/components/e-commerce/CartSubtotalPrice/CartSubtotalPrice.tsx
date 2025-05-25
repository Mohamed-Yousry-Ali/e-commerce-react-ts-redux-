import style from "./style.module.css";
const { container } = style;
const CartSubtotalPrice = () => {
  return (
    <>
      <div className={container}>
        <h2>Subtotal : </h2>
        <h3>$99.99</h3>
      </div>
      <div className="d-flex flex-column align-items-center mb-3">
        <p>Shipping and taxes calculated at checkout</p>
        <button className="btn btn-primary">Checkout</button>
      </div>
    </>
  );
};

export default CartSubtotalPrice;
