import { createContext } from "react";

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

export const BookContext = createContext(bookInfo);