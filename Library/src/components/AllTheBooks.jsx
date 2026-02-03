import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import fantasyBooks from "../books/fantasy.json";

const AllTheBooks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const activeBook = fantasyBooks[activeIndex];

  return (
    <div className="text-center">
      <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={null}>
        {fantasyBooks.map((book) => (
          <Carousel.Item key={book.asin}>
            <div className="carousel-img-wrapper">
              <img className="d-block w-100 book-carousel-img" src={book.img} alt={book.title} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Titolo che cambia */}
      <h4 className="mt-3">{activeBook.title}</h4>
      <p className="text-muted">€ {activeBook.price}</p>
    </div>
  );
};

export default AllTheBooks;
