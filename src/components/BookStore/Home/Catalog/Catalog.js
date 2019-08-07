import React, { useContext, useState } from "react";
import BookList from "./BooksList/BooksList";
import BooksFilter from "./BooksFilter/BooksFilter";
import { BooksContext } from "../../../../Context/BooksContext/BooksContext";

const Catalog = () => {
  const context = useContext(BooksContext);
  const [state] = context;
  const [list, setList] = useState("all");

  const toogleList = list => {
    setList(list);
  };
  const allBooks = Object.keys(state.bookList).map(i => state.bookList[i]);
  const likedBooks = allBooks.filter(book => {
    return book.liked;
  });
  console.log(likedBooks);
  const bookList = list === "all" ? allBooks : likedBooks;
  return (
    <React.Fragment>
      <BooksFilter toogleList={toogleList} />
      <BookList list={bookList} />
    </React.Fragment>
  );
};
export default Catalog;
