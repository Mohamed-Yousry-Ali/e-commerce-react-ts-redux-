import type { TProduct } from "@types";
import CartItems from "../CartItems/CartItems";

type CartItemsListProps = {
  products: TProduct[];
};
const CartItemsList = ({ products }: CartItemsListProps) => {
  const renderList = products.map((product) => (
    <CartItems key={product.id} {...product} />
  ));
  return <div>{renderList}</div>;
};

export default CartItemsList;
