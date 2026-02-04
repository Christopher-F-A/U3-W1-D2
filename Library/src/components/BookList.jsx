import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import SingleBook from "./SingleBook";

const BookList = ({ books, onBookSelect }) => {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      {/* Campo di ricerca */}
      <Form.Group className="mb-4">
        <Form.Control type="text" placeholder="Cerca un libro..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </Form.Group>

      {/* Griglia libri */}
      <Row className="g-4">
        {filteredBooks.map((book) => (
          <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
            <SingleBook book={book} onBookSelect={onBookSelect} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default BookList;
