import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const TOKEN = "Bearer IL_TUO_TOKEN_QUI";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
  };

  componentDidMount() {
    if (this.props.asin) {
      this.fetchComments();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  }

  fetchComments = async () => {
    this.setState({ isLoading: true });

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
        headers: {
          Authorization: TOKEN,
        },
      });

      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data, isLoading: false });
      } else {
        console.error("Errore fetch commenti");
        this.setState({ isLoading: false });
      }
    } catch (error) {
      console.error(error);
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <>
        {this.state.isLoading && <p>Caricamento commenti...</p>}

        <CommentsList comments={this.state.comments} />

        <AddComment asin={this.props.asin} refreshComments={this.fetchComments} />
      </>
    );
  }
}

export default CommentArea;
