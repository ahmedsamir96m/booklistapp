import React, { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
  const { dispatchBooks } = useContext(BookContext);
  const [title, setTtitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchBooks({ type: "ADD_BOOK", book: { title, author } });
    setTtitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => {
          setTtitle(e.target.value);
        }}
        required
      />
      <input
        type="text"
        placeholder="book author"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
        required
      />
      <input type="submit" value="add book" />
    </form>
  );
};

export default BookForm;