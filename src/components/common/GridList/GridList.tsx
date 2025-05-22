import type { ReactNode } from "react";
import { Col, Row } from "react-bootstrap";

type TGridListProps<T> = {
  records: T[];
  renderItems: (record: T) => ReactNode;
};
type HasID = { id?: number };
const GridList = <T extends HasID>({
  records,
  renderItems,
}: TGridListProps<T>) => {
  //render data
  const renderList =
    records.length > 0
      ? records.map((record) => (
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
            key={record.id}
          >
            {renderItems(record)}
          </Col>
        ))
      : "there are no category";
  return <Row>{renderList}</Row>;
};

export default GridList;
