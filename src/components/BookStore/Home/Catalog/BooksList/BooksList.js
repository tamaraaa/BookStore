import React, { useContext } from "react";
import BookListItem from "./BookListItem/BookListItem";
import "./book_list.scss";
import { LIKE } from "../../../../../Context/BooksContext/BooksReducer";
import { BooksContext } from "../../../../../Context/BooksContext/BooksContext";
var uniqid = require("uniqid");

const BooksList = props => {
  const context = useContext(BooksContext);
  const [state, dispatch] = context;
  const handelLike = id => {
    dispatch({ type: LIKE, payload: id });
  };

  return (
    <ul className="bookList">
      {props.list.map(book => {
        return (
          <BookListItem
            dispatch={dispatch}
            title={book.title}
            data={book}
            id={book.id}
            key={uniqid() + book.title}
            handelLike={() => handelLike(book.id)}
          />
        );
      })}
    </ul>
  );
};
export default BooksList;
