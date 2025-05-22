import { createAsyncThunk } from "@reduxjs/toolkit";
import type { TCategory } from "@types";
import axios from "axios";

type TCategoryResponse = TCategory[];

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get<TCategoryResponse>(
        "http://localhost:5005/categories"
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An Unexpacted Error");
      }
    }
  }
);

export default actGetCategories;
