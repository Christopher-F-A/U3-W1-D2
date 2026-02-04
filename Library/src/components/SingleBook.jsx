import { Component } from "react";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState(
      (prevState) => ({ selected: !prevState.selected }),
      () => {
        if (this.state.selected) {
          this.props.onBookSelect(this.props.book);
        }
      },
    );
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <Card
        className="h-100"
        style={{
          border: selected ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={book.img} className="book-cover" onClick={this.toggleSelected} style={{ cursor: "pointer" }} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
