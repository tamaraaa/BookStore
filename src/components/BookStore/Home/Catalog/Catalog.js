import React, { useContext, useState } from "react";
import BookList from "./BooksList/BooksList";
import BooksFilter from "./BooksFilter/BooksFilter";
import { BooksContext } from "../../../../Context/BooksContext/BooksContext";

const Catalog = () => {
  const context = useContext(BooksContext);
  const [state, dispatch] = context;
  const [list, setList] = useState("all");

  const toogleList = list => {
    setList(list);
  };
  const bookList = list === "all" ? state.bookList : state.likedBooks;

  return (
    <React.Fragment>
      <BooksFilter toogleList={toogleList} />
      <BookList list={bookList} />
    </React.Fragment>
  );
};
export default Catalog;
