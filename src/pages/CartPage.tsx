import { Heading } from "@components/common";
import { CartItemsList, CartSubtotalPrice } from "@components/e-commerce";
import { Loading } from "@components/feedback";
import actGetProductsByItem from "@store/cart/actGetProductsByItem";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const { items, productFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );
  useEffect(() => {
    dispatch(actGetProductsByItem());
  }, [dispatch]);

  const products = productFullInfo.map((product) => ({
    ...product,
    quantity: items[product.id] || 0,
  }));

  return (
    <>
      <Heading>Cart</Heading>
      <Loading loading={loading} error={error}>
        <CartItemsList products={products} />
        <CartSubtotalPrice />
      </Loading>
    </>
  );
};

export default CartPage;
