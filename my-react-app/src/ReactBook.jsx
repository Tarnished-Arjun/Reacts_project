import { useContext } from "react";
import { BookContext } from "./BookContext";

function ReactBook() {
  const books = useContext(BookContext);

  return (
    <>
      <h2>React Book</h2>
      <p>Title: {books.React.title}</p>
      <p>Author: {books.React.author}</p>
    </>
  );
}

export default ReactBook;