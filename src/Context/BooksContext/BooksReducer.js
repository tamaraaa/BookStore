export const LIKE = "LIKE";
export const COMMENT = "COMMENT";

const booksReducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case LIKE:
      const likedBook = state.bookList.filter(book => {
        const chekLikedList = state.likedBooks.filter(key => {
          return key.id === book.id;
        });
        if (!chekLikedList.length) {
          return book.id === payload;
        } else {
          return;
        }
      });
      likedBook[0].liked = true;
      return {
        ...state,
        likedBooks: state.likedBooks.concat(likedBook)
      };
    case COMMENT: {
      const commentedBook = [...state.bookList];
      commentedBook.map(book => {
        if (book.id === payload.id) {
          return (book.comments = book.comments.concat(payload.text));
        }
      });
      return {
        ...state,
        bookList: commentedBook
      };
    }
    default:
      return state;
  }
};
export default booksReducer;
