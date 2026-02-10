import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2VkNDg1ZTNiMTAwMTViNWVkOTciLCJpYXQiOjE3NzAzMDQ5NjksImV4cCI6MTc3MTUxNDU2OX0.dDFjVBa5EbRxWoKP-8e8pWb1LZMrqM5dBuioNiuN-jM";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!asin) return;

    const fetchComments = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
          headers: {
            Authorization: TOKEN,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setComments(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [asin]);

  return (
    <>
      {isLoading && <p>Caricamento commenti...</p>}
      <CommentsList comments={comments} />
      <AddComment asin={asin} refreshComments={() => setComments([])} />
    </>
  );
};

export default CommentArea;
