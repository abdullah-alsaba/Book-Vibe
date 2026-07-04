import { use } from "react";
import Book from "./Book/Book";

const bookPromise = fetch('/booksData.json').then((res)=>res.json())
const AllBooks = () => {
    const books = use(bookPromise)
    console.log(books)
    return (
      <div className="max-w-7xl mx-auto px-6 my-12">
        <h2 className="font-semibold text-center text-4xl">Books</h2>
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    );
};

export default AllBooks;