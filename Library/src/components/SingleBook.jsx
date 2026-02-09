import Card from "react-bootstrap/Card";

const SingleBook = ({ book, onSelect, isSelected }) => {
  return (
    <Card onClick={onSelect} className={isSelected ? "border border-danger" : ""} style={{ cursor: "pointer" }}>
      <Card.Img variant="top" src={book.img} className="book-cover" />
      <Card.Body>
        <Card.Title className="card-title">{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
