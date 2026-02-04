import Card from "react-bootstrap/Card";

const BookDetails = ({ book }) => {
  if (!book) return null;

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          <strong>Category:</strong> {book.category}
        </Card.Text>
        <Card.Text>
          <strong>Price:</strong> € {book.price}
        </Card.Text>
        <Card.Text>
          <strong>ASIN:</strong> {book.asin}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookDetails;
