// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

// eslint-disable-next-line react-refresh/only-export-components
export const BookContext= createContext()

const BookProviderContext = ({ children }) => {

  const [storedBooks, setStoredBooks] = useState([])
  const [wishlist, setWishlist] = useState([]);
  
  const handelWishlistButton = (currentBook) => {

    const isExistInReadList = storedBooks.find((book) => book.bookId === currentBook.bookId);

    if (isExistInReadList) {
      toast.error("The Book Already in Read List")
      return;
    }

    const isExistBook = wishlist.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("The Books is Already Exist in Wishlist");
      return;
    } else {
      setWishlist([...wishlist, currentBook]);
      toast.success("The Book is successfully Added to Wishlist");
    }
  };
  const handelReadButton = (currentBook) => {
    const isExistBook = storedBooks.find((book) => book.bookId === currentBook.bookId);
     
      if(isExistBook){
        toast.error("The Books is Already in Read List")
        return
    }
      else {
        setStoredBooks([...storedBooks, currentBook])
        toast.success("The Book is Successfully Added to Read List")
    }
    }

    const data = {
      storedBooks,
      setStoredBooks,
      handelReadButton,
      handelWishlistButton,
      wishlist,
      setWishlist,
    };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProviderContext;