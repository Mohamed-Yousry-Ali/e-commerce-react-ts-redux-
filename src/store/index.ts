import { configureStore } from "@reduxjs/toolkit";
import categories from "./categories/categoriesSlice";
import products from "./products/productSlice";
import categoriesApi from "./categories/actApi/categoriesApi";
const store = configureStore({
  reducer: {
    categories,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    products,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(categoriesApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
