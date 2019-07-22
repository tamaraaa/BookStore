import React, { createContext, useReducer, useMemo } from "react";
import booksReducer from "./BooksReducer";

const booksState = {
  bookList: [
    {
      title: "The couple next door",
      description:
        "Lorem ipsum dolor amet tousled kitsch yr copper mug cronut 8-bit. Adaptogen forage kitsch jianbing cold-pressed artisan slow-carb direct trade roof party glossier fixie. Mlkshk food truck ennui readymade flannel. Next level skateboard fanny pack fam live-edge, hella meditation paleo bitters bushwick. Distillery vice four loko lumbersexual semiotics. Stumptown fingerstache meggings PBR&B retro disrupt synth crucifix vinyl farm-to-table quinoa pug.",
      liked: false,
      img: "https://images-eu.ssl-images-amazon.com/images/I/51s6m2M49DL.jpg",
      comments: [
        "sadqwdhgbjkhhgfhdsfwefewfwefwefewjfhjfjhggugjkl",
        "wdqwdqw",
        "wdqwdqw",
        "wdqwdqw"
      ],
      id: 0
    },
    {
      title: "Knife",
      description:
        "Lorem ipsum dolor amet tousled kitsch yr copper mug cronut 8-bit. Adaptogen forage kitsch jianbing cold-pressed artisan slow-carb direct trade roof party glossier fixie. Mlkshk food truck ennui readymade flannel. Next level skateboard fanny pack fam live-edge, hella meditation paleo bitters bushwick. Distillery vice four loko lumbersexual semiotics. Stumptown fingerstache meggings PBR&B retro disrupt synth crucifix vinyl farm-to-table quinoa pug.",
      liked: false,
      img: "https://images-eu.ssl-images-amazon.com/images/I/51s6m2M49DL.jpg",
      comments: [],
      id: 1
    },
    {
      title: "Bad blood",
      description:
        "Lorem ipsum dolor amet tousled kitsch yr copper mug cronut 8-bit. Adaptogen forage kitsch jianbing cold-pressed artisan slow-carb direct trade roof party glossier fixie. Mlkshk food truck ennui readymade flannel. Next level skateboard fanny pack fam live-edge, hella meditation paleo bitters bushwick. Distillery vice four loko lumbersexual semiotics. Stumptown fingerstache meggings PBR&B retro disrupt synth crucifix vinyl farm-to-table quinoa pug.",
      liked: false,
      img: "https://images-eu.ssl-images-amazon.com/images/I/51s6m2M49DL.jpg",
      comments: [],
      id: 2
    },
    {
      title: "Thirteen",
      description:
        "Lorem ipsum dolor amet tousled kitsch yr copper mug cronut 8-bit. Adaptogen forage kitsch jianbing cold-pressed artisan slow-carb direct trade roof party glossier fixie. Mlkshk food truck ennui readymade flannel. Next level skateboard fanny pack fam live-edge, hella meditation paleo bitters bushwick. Distillery vice four loko lumbersexual semiotics. Stumptown fingerstache meggings PBR&B retro disrupt synth crucifix vinyl farm-to-table quinoa pug.",
      liked: false,
      img:
        "https://www.writing.ie/wp-content/uploads/2018/02/thirteen-220x330.jpg",
      comments: [],
      id: 3
    }
  ],
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
