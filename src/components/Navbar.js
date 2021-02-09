import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <nav className="navbar">
      <h1>Book List</h1>
      <p>Currently you have {books.length} books to go through...!</p>
    </nav>
  );
};

export default Navbar;
