import ListGroup from "react-bootstrap/ListGroup";

const SingleComment = ({ comment }) => {
  return (
    <ListGroup.Item>
      <strong>{comment.rate} stelle</strong> – {comment.comment}
    </ListGroup.Item>
  );
};

export default SingleComment;
