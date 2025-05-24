import { Button } from "react-bootstrap";
import styles from "./style.module.css";
import type { TProduct } from "@types";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
const { product, productImg } = styles;

const Product = ({ id, title, price, img }: TProduct) => {
  const dispatch = useAppDispatch();
  const addCartHandler = () => {
    dispatch(addToCart(id));
  };
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price} EGP</h3>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={addCartHandler}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
