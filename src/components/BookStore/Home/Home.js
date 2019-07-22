import React from "react";
import "./home.scss";
import Header from "./Header/Header";
import Catalog from "./Catalog/Catalog";
import { BooksProvider } from "../../../Context/BooksContext/BooksContext";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <h1 className="home_headline">
        <em>Choose the right bestseller for you!</em>
      </h1>
      <BooksProvider>
        <Catalog />
      </BooksProvider>
    </div>
  );
};
export default Home;
