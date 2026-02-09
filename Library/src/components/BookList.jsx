import { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    selectedAsin: null,
  };

  handleBookSelect = (asin) => {
    this.setState({ selectedAsin: asin });
  };

  render() {
    return (
      <Row>
        {/* COLONNA SINISTRA */}
        <Col md={8}>
          <Row>
            {this.props.books.map((book) => (
              <Col md={3} key={book.asin} className="mb-3">
                <SingleBook book={book} isSelected={this.state.selectedAsin === book.asin} onSelect={() => this.handleBookSelect(book.asin)} />
              </Col>
            ))}
          </Row>
        </Col>

        {/* COLONNA DESTRA */}
        <Col md={4}>
          {this.state.selectedAsin ? <CommentArea asin={this.state.selectedAsin} /> : <Alert variant="info">Seleziona un libro per vedere i commenti</Alert>}
        </Col>
      </Row>
    );
  }
}

export default BookList;
