import React, { useContext } from "react";
import BookListItem from "./BookListItem/BookListItem";
import "./book_list.scss";
import { LIKE } from "../../../../../Context/BooksContext/BooksReducer";
import { BooksContext } from "../../../../../Context/BooksContext/BooksContext";

const BooksList = props => {
  const context = useContext(BooksContext);
  const [state, dispatch] = context;
  const handelLike = id => {
    dispatch({ type: LIKE, payload: id });
  };
  console.log(state);
  return (
    <ul className="bookList">
      {props.list.map((book, index) => {
        return (
          <BookListItem
            title={book.title}
            data={book}
            key={index + book.title}
            handelLike={() => handelLike(book.id)}
          />
        );
      })}
    </ul>
  );
};
export default BooksList;
