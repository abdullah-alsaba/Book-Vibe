/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { BookContext } from '../../../routes/Context/BookProviderContext';
import ListedReadBookCard from './ListedReadBookCard/ListedReadBookCard';
import EmptyBookList from './EmptyBookList/EmptyBookList';


const ListedReadBooks = () => {

    const { storedBooks } = useContext(BookContext);
    
    if (storedBooks.length === 0) {
     return <EmptyBookList></EmptyBookList>;
    }
     
    return (
        
        <div>
            
        {storedBooks.map((book, ind) => (
          <ListedReadBookCard key={ind} book={book}></ListedReadBookCard>
        ))}
      </div>
    );
};

export default ListedReadBooks;