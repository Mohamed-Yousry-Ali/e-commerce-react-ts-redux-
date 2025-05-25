import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "..";
import axios from "axios";
import type { TProduct } from "@types";
type TResponse = TProduct[];
const actGetProductsByItem = createAsyncThunk(
  "cart/getProductsByID",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const { cart } = getState() as RootState;
    const itemsID = Object.keys(cart.items);
    if (!itemsID.length) {
      return fulfillWithValue([]);
    }
    try {
      const concatenatedIDs = itemsID.map((id) => `id=${id}`).join("&");
      const res = await axios.get<TResponse>(
        `http://localhost:5005/products?${concatenatedIDs}`
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An Unexpected Error");
      }
    }
  }
);

export default actGetProductsByItem;
