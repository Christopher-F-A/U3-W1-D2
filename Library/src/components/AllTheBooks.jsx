import fantasyBooks from "../books/fantasy.json";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const AllTheBooks = () => {
  return (
    <Row className="g-4">
      {fantasyBooks.map((book) => (
        <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
          <Card className="h-100">
            <Card.Img variant="top" src={book.img} className="book-cover" />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AllTheBooks;
