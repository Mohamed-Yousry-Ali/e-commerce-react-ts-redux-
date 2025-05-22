import { Category } from "@components/e-commerce";
import { Loading } from "@components/feedback";
// import type { SerializedError } from "@reduxjs/toolkit";
// import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useGetCategoriesApiQuery } from "@store/categories/actApi/categoriesApi";

import { Col, Container, Row } from "react-bootstrap";

const CategoriesRTK = () => {
  const {
    data: records,
    isLoading,
    // isError,
    error,
    isSuccess,
  } = useGetCategoriesApiQuery();

  const categoriesList =
    isSuccess && records.length > 0
      ? records.map((record) => (
          <Col
            key={record.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Category {...record} />
          </Col>
        ))
      : "there are no category";

  // //Loading
  // if (isLoading) return <h2>Loading...</h2>;

  // //Error
  // if (isError) {
  //   let errorMessage = "An error occurred.";
  //   if ("status" in error) {
  //     const err = error as FetchBaseQueryError;
  //     errorMessage = err.data
  //       ? JSON.stringify(err.data)
  //       : `HTTP error: ${err.status}`;
  //   } else {
  //     const err = error as SerializedError;
  //     errorMessage = err.message || "An unknown error occurred.";
  //   }
  //   return <h2>{errorMessage}</h2>;
  // }

  return (
    <Container>
      <Loading loading={isLoading} error={error}>
        <Row>{categoriesList}</Row>
      </Loading>
    </Container>
  );
};

export default CategoriesRTK;
