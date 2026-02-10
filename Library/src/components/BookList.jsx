import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList = ({ books }) => {
  const [selectedAsin, setSelectedAsin] = useState(null);

  return (
    <Row>
      {/* SINISTRA */}
      <Col md={8}>
        <Row>
          {books.map((book) => (
            <Col md={3} key={book.asin} className="mb-3">
              <SingleBook book={book} isSelected={selectedAsin === book.asin} onSelect={() => setSelectedAsin(book.asin)} />
            </Col>
          ))}
        </Row>
      </Col>

      {/* DESTRA */}
      <Col md={4}>{selectedAsin ? <CommentArea asin={selectedAsin} /> : <Alert variant="info">Seleziona un libro per vedere i commenti 📚</Alert>}</Col>
    </Row>
  );
};

export default BookList;
