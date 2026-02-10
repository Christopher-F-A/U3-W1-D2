import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2VkNDg1ZTNiMTAwMTViNWVkOTciLCJpYXQiOjE3NzAzMDQ5NjksImV4cCI6MTc3MTUxNDU2OX0.dDFjVBa5EbRxWoKP-8e8pWb1LZMrqM5dBuioNiuN-jM";

const AddComment = ({ asin }) => {
  const [formData, setFormData] = useState({
    comment: "",
    rate: "1",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitComment = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        headers: {
          Authorization: TOKEN,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          elementId: asin,
        }),
      });

      setFormData({ comment: "", rate: "1" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={submitComment} className="mt-3">
      <Form.Group>
        <Form.Control name="comment" value={formData.comment} onChange={handleChange} placeholder="Scrivi un commento" />
      </Form.Group>

      <Form.Group className="mt-2">
        <Form.Select name="rate" value={formData.rate} onChange={handleChange}>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n}>{n}</option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button type="submit" className="mt-2">
        Invia
      </Button>
    </Form>
  );
};

export default AddComment;
