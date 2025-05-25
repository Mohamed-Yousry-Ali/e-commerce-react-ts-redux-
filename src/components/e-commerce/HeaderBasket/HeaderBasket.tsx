import Logo from "@assets/svg/cart.svg?react";
import style from "./style.module.css";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelectors } from "@store/cart/cartSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const { basketContainer, basketQuantity, pumpCartQuantity, basketCart } = style;

const HeaderBasket = () => {
  const navigate = useNavigate();
  const [isAnimated, setIsAnimated] = useState(false);

  const totalQuantity = useAppSelector(getCartTotalQuantitySelectors);
  const quantityStyle = `${basketQuantity} ${
    isAnimated ? pumpCartQuantity : ""
  }`;
  useEffect(() => {
    if (!totalQuantity) return;
    setIsAnimated(true);
    const debounce = setTimeout(() => {
      setIsAnimated(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [totalQuantity]);
  return (
    <div className={basketContainer} onClick={() => navigate("/cart")}>
      <div className={basketCart}>
        <Logo title="basket icon" />
        <div className={quantityStyle}>{totalQuantity}</div>
      </div>
      <h3>Cart</h3>
    </div>
  );
};

export default HeaderBasket;
