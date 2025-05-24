export type TLoading = "idle" | "pending" | "succeeeded" | "failed";

export type TCategory = {
  id?: number;
  title: string;
  prefix: string;
  img: string;
};

export type TCategoriesState = {
  records: TCategory[];
  loading: TLoading;
  error: string | null;
};

////////////////////////////////////////////////////////////////

export type TProduct = {
  id: number;
  title: string;
  price: number;
  cat_prefix: string;
  img: string;
  quantity?: number;
};
export type TProductsState = {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
};
