export const LIKE = "LIKE";

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
      return {
        ...state,
        likedBooks: state.likedBooks.concat(likedBook)
      };
    default:
      return state;
  }
};
export default booksReducer;
