import { GridList } from "@components/common";
import { Product } from "@components/e-commerce";
import { Loading } from "@components/feedback";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetProducts from "@store/products/act/actGetProducts";
import { cleanUp } from "@store/products/productSlice";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);

  console.log(records);
  useEffect(() => {
    dispatch(actGetProducts(params.prefix as string));
    return () => {
      dispatch(cleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Loading loading={loading} error={error}>
        <GridList
          records={records}
          renderItems={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
