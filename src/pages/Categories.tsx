import { GridList } from "@components/common";
import { Category } from "@components/e-commerce";
import { Loading } from "@components/feedback";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  return (
    <Container>
      <Loading loading={loading} error={error}>
        <GridList
          records={records}
          renderItems={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
