import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2VkNDg1ZTNiMTAwMTViNWVkOTciLCJpYXQiOjE3NzAzMDQ5NjksImV4cCI6MTc3MTUxNDU2OX0.dDFjVBa5EbRxWoKP-8e8pWb1LZMrqM5dBuioNiuN-jM";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = async () => {
    try {
      const response = await fetch(API_URL + this.props.asin, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
      }
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <div className="mt-3">
        <CommentsList comments={this.state.comments} />
        <AddComment asin={this.props.asin} onCommentAdded={this.fetchComments} />
      </div>
    );
  }
}

export default CommentArea;
