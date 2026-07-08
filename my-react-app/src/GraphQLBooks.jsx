import { useContext } from "react";
import { BookContext } from "./BookContext";

function GraphQLBook() {
  const books = useContext(BookContext);

  return (
    <>
      <h2>GraphQL Book</h2>
      <p>Title: {books.GraphQL.title}</p>
      <p>Author: {books.GraphQL.author}</p>
    </>
  );
}

export default GraphQLBook;