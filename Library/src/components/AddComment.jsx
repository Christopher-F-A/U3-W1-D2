import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2VkNDg1ZTNiMTAwMTViNWVkOTciLCJpYXQiOjE3NzAzMDQ5NjksImV4cCI6MTc3MTUxNDU2OX0.dDFjVBa5EbRxWoKP-8e8pWb1LZMrqM5dBuioNiuN-jM";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "1",
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      comment: this.state.comment,
      rate: this.state.rate,
      elementId: this.props.asin,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
        this.setState({ comment: "", rate: "1" });
        this.props.onCommentAdded();
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Scrivi un commento..."
            value={this.state.comment}
            onChange={(e) => this.setState({ comment: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Select value={this.state.rate} onChange={(e) => this.setState({ rate: e.target.value })}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button type="submit" variant="primary">
          Invia recensione
        </Button>
      </Form>
    );
  }
}

export default AddComment;
