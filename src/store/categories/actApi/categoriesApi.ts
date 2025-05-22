import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TCategory } from "@types";
type TCategoryResponse = TCategory[];
const categoriesApi = createApi({
  reducerPath: "categoriesRTK",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5005",
  }),
  endpoints: (builder) => ({
    getCategoriesApi: builder.query<TCategoryResponse, void | undefined>({
      query: () => "/categories",
    }),
  }),
});

export const { useGetCategoriesApiQuery } = categoriesApi;
export default categoriesApi;
