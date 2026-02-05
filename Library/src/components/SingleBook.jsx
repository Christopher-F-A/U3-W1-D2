import { Component } from "react";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState((prev) => ({ selected: !prev.selected }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <>
        <Card onClick={this.toggleSelected} className={selected ? "border border-danger" : ""} style={{ cursor: "pointer" }}>
          <Card.Img variant="top" src={book.img} className="book-cover" />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>

        {selected && <CommentArea asin={book.asin} />}
      </>
    );
  }
}

export default SingleBook;
