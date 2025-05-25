import { createSlice } from "@reduxjs/toolkit";
import type { TLoading, TProduct } from "@types";
import { getCartTotalQuantitySelectors } from "./selectors/index";
import actGetProductsByItem from "./actGetProductsByItem";

interface ICartState {
  items: { [key: string]: number };
  productFullInfo: TProduct[];
  loading: TLoading;
  error?: string | null;
}
const initialState: ICartState = {
  items: {},
  productFullInfo: [],
  loading: "idle",
  error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(actGetProductsByItem.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actGetProductsByItem.fulfilled, (state, action) => {
        state.productFullInfo = action.payload;
        state.loading = "succeeeded";
      })
      .addCase(actGetProductsByItem.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
  },
});

export { getCartTotalQuantitySelectors, actGetProductsByItem };
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
