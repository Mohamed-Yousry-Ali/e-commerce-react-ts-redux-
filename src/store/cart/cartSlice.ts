import { createSlice } from "@reduxjs/toolkit";
import type { TProduct } from "@types";
import { getCartTotalQuantitySelectors } from "./selectors/index";

interface ICartState {
  items: { [key: number]: number };
  productFullInfo: TProduct[];
}
const initialState: ICartState = {
  items: {},
  productFullInfo: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productID = action.payload;
      if (state.items[productID]) {
        state.items[productID]++;
      } else {
        state.items[productID] = 1;
      }
    },
  },
});

export { getCartTotalQuantitySelectors };
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
