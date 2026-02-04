import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";

const BookList = ({ books, onBookSelect }) => {
  return (
    <Row className="g-4">
      {books.map((book) => (
        <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
          <SingleBook book={book} onBookSelect={onBookSelect} />
        </Col>
      ))}
    </Row>
  );
};

export default BookList;
