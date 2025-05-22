import { createAsyncThunk } from "@reduxjs/toolkit";
import type { TProduct } from "@types";
import axios from "axios";
type TProductResponse = TProduct[];
const actGetProducts = createAsyncThunk(
  "products/actGetProducts",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TProductResponse>(
        `http://localhost:5005/products?cat_prefix=${prefix}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);
export default actGetProducts;
