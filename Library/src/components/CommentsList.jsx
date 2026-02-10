import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";

const CommentsList = ({ comments }) => {
  if (!comments.length) {
    return <p>Nessun commento per questo libro</p>;
  }

  return (
    <ul>
      {comments.map((c) => (
        <li key={c._id}>
          {c.comment} ({c.rate}/5)
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;
