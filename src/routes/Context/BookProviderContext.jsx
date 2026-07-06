// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

// eslint-disable-next-line react-refresh/only-export-components
export const BookContext= createContext()

const BookProviderContext = ({ children }) => {

    const [storedBooks, setStoredBooks] = useState([])
    
  const handelReadButton = (currentBook) => {
    const isExistBook = storedBooks.find((book) => book.bookId === currentBook.bookId);
     
      if(isExistBook){
        toast.error("The Books is Already Exist")
        return
    }
      else {
        setStoredBooks([...storedBooks, currentBook])
        toast.success("The Book is successfully added to read list")
    }
    }

    const data = {
      storedBooks, setStoredBooks, handelReadButton
    }

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProviderContext;