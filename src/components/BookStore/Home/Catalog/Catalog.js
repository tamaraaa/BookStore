import React, { useContext, useState } from "react";
import BookList from "./BooksList/BooksList";
import BooksFilter from "./BooksFilter/BooksFilter";
import { BooksContext } from "../../../../Context/BooksContext/BooksContext";

const Catalog = () => {
  const context = useContext(BooksContext);
  const [state, dispatch] = context;
  console.log(state.likedBooks);

  return (
    <React.Fragment>
      <BooksFilter />
      <BookList list={state.bookList} />
    </React.Fragment>
  );
};
export default Catalog;
