import Logo from "@assets/svg/cart.svg?react";
import style from "./style.module.css";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelectors } from "@store/cart/cartSlice";

const { basketContainer, basketQuantity } = style;
const HeaderBasket = () => {
  const totalQuantity = useAppSelector(getCartTotalQuantitySelectors);

  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>
  );
};

export default HeaderBasket;
