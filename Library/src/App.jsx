import { useState } from "react";
import Container from "react-bootstrap/Container";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";

import fantasyBooks from "./books/fantasy.json";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <MyNav />
      <Container className="mt-4">
        <Welcome />
        <BookList books={fantasyBooks} onBookSelect={setSelectedBook} />
        <BookDetails book={selectedBook} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
