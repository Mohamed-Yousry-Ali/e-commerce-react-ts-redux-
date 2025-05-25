import { Button, Form } from "react-bootstrap";
import style from "./style.module.css";
import type { TProduct } from "@types";

const { cartItem, product, productImg, productInfo, cartItemSelection } = style;
type CartItemsProps = TProduct;
const CartItems = ({ id, title, price, img, quantity }: CartItemsProps) => {
  return (
    <div className={cartItem}>
      <div className={product}>
        <div className={productImg}>
          <img src={img} alt={title} />
        </div>
        <div className={productInfo}>
          <h2>{title}</h2>
          <h3>${price}</h3>
          <Button
            variant="secondary"
            className="mt-auto"
            style={{ color: "white", width: "100px" }}
          >
            Remove
          </Button>
        </div>
      </div>
      <div className={cartItemSelection}>
        <span className="d-block mb-1">Quantity</span>
        <Form.Select aria-label="Default select example">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default CartItems;
