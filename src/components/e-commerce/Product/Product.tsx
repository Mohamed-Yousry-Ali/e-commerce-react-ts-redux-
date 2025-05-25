import { Button, Spinner } from "react-bootstrap";
import styles from "./style.module.css";
import type { TProduct } from "@types";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { memo, useState } from "react";

const { product, productImg } = styles;

const Product = memo(({ id, title, price, img, max, quantity }: TProduct) => {
  const dispatch = useAppDispatch();
  // State to manage loading state when adding to cart
  // This is used to show a loading spinner while the product is being added to the cart
  const [isLoading, setIsLoading] = useState(false);

  const currentQuantity = Math.max((max ?? 0) - (quantity ?? 0), 0);

  const addCartHandler = () => {
    setIsLoading(true);
    dispatch(addToCart(id));
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const isOutOfStock = currentQuantity === 0;
  const isButtonDisabled = isLoading || isOutOfStock;

  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2 title={title}>{title}</h2>

      <span>{Number(price).toFixed(2)} EGP</span>
      <p>Available: {currentQuantity}</p>

      <Button
        variant={isOutOfStock ? "secondary" : "info"}
        style={{ color: "white" }}
        onClick={addCartHandler}
        disabled={isButtonDisabled}
      >
        {isOutOfStock ? (
          "Out of stock"
        ) : isLoading ? (
          <>
            <Spinner
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />{" "}
            Loading...
          </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
});

export default Product;
