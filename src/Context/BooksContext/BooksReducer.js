export const LIKE = "LIKE";
export const COMMENT = "COMMENT";

const booksReducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case LIKE:
      const likedBook = { ...state.bookList[payload] };
      likedBook.liked++;
      let bookList = { ...state.bookList };
      bookList[payload] = likedBook;
      return {
        ...state,
        bookList
      };
    case COMMENT:
      const commentedBook = { ...state.bookList[payload.id] };
      commentedBook.comments = [payload.text];
      let bookListCommented = { ...state.bookList };
      bookListCommented[payload.id] = { ...commentedBook };
      return {
        ...state,
        bookList: bookListCommented
      };
    default:
      return state;
  }
};
export default booksReducer;
