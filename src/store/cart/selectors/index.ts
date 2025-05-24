import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@store/index";

const getCartTotalQuantitySelectors = createSelector(
  (state: RootState) => state.cart.items,
  (itemsState) => {
    const totalQuantity = Object.values(itemsState).reduce(
      (accum, currentValue) => {
        return accum + currentValue;
      },
      0
    );
    return totalQuantity;
  }
);

export { getCartTotalQuantitySelectors };
