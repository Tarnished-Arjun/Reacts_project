import ReactBook from "./ReactBook";
import GraphQLBook from "./GraphQLBook";
import { BookContext } from "./BookContext";

const bookInfo = {
  React: {
    title: "Learn ReactJs in 15 Days",
    author: "Adhithi",
  },
  GraphQL: {
    title: "A to Z On GraphQL",
    author: "Adhithi",
  },
};

function Library() {
  return (
    <BookContext.Provider value={bookInfo}>
      <ReactBook />
      <GraphQLBook />
    </BookContext.Provider>
  );
}

export default Library;