import React, { createContext, useReducer, useMemo } from "react";
import booksReducer from "./BooksReducer";

const booksState = {
  bookList: {
    0: {
      title: "The couple next door",
      description:
        "Lorem ipsum dolor amet tousled kitsch yr copper mug cronut 8-bit. Adaptogen forage kitsch jianbing cold-pressed artisan slow-carb direct trade roof party glossier fixie. Mlkshk food truck ennui readymade flannel. Next level skateboard fanny pack fam live-edge, hella meditation paleo bitters bushwick. Distillery vice four loko lumbersexual semiotics. Stumptown fingerstache meggings PBR&B retro disrupt synth crucifix vinyl farm-to-table quinoa pug.",
      liked: 0,
      img: "https://images-eu.ssl-images-amazon.com/images/I/51s6m2M49DL.jpg",
      comments: [],
      id: 0
    },
    1: {
      title: "Knife",
      description:
        "Lorem ipsum dolor amet tousled kitsch yr copper mug cronut 8-bit. Adaptogen forage kitsch jianbing cold-pressed artisan slow-carb direct trade roof party glossier fixie. Mlkshk food truck ennui readymade flannel. Next level skateboard fanny pack fam live-edge, hella meditation paleo bitters bushwick. Distillery vice four loko lumbersexual semiotics. Stumptown fingerstache meggings PBR&B retro disrupt synth crucifix vinyl farm-to-table quinoa pug.",
      liked: 0,
      img:
        "https://dynamic.indigoimages.ca/books/0735275343.jpg?quality=85&width=380&maxheight=515&lang=en",
      comments: [],
      id: 1
    },
    2: {
      title: "Bad blood",
      description:
        "Lorem ipsum dolor amet tousled kitsch yr copper mug cronut 8-bit. Adaptogen forage kitsch jianbing cold-pressed artisan slow-carb direct trade roof party glossier fixie. Mlkshk food truck ennui readymade flannel. Next level skateboard fanny pack fam live-edge, hella meditation paleo bitters bushwick. Distillery vice four loko lumbersexual semiotics. Stumptown fingerstache meggings PBR&B retro disrupt synth crucifix vinyl farm-to-table quinoa pug.",
      liked: 0,
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556268702i/37976541._UY630_SR1200,630_.jpg",
      comments: [],
      id: 2
    },
    3: {
      title: "Thirteen",
      description:
        "Lorem ipsum dolor amet tousled kitsch yr copper mug cronut 8-bit. Adaptogen forage kitsch jianbing cold-pressed artisan slow-carb direct trade roof party glossier fixie. Mlkshk food truck ennui readymade flannel. Next level skateboard fanny pack fam live-edge, hella meditation paleo bitters bushwick. Distillery vice four loko lumbersexual semiotics. Stumptown fingerstache meggings PBR&B retro disrupt synth crucifix vinyl farm-to-table quinoa pug.",
      liked: 0,
      img:
        "https://www.writing.ie/wp-content/uploads/2018/02/thirteen-220x330.jpg",
      comments: [],
      id: 3
    }
  },
  likedBooks: []
};

const BooksContext = createContext();

const BooksProvider = props => {
  const [state, dispatch] = useReducer(booksReducer, booksState);
  const value = useMemo(() => [state, dispatch], [state]);
  return (
    <BooksContext.Provider value={value}>
      {props.children}
    </BooksContext.Provider>
  );
};

export { BooksContext, BooksProvider };
