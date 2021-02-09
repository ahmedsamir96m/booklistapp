import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (prpos) => {
  const [books, dispatchBooks] = useReducer(bookReducer, [], () => {
    const localStorageBooks = localStorage.getItem("books");
    return localStorageBooks ? JSON.parse(localStorageBooks) : [];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider
      value={{ books: books, dispatchBooks: dispatchBooks }}
    >
      {prpos.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
