import { use } from "react";
import Book from "./Book/Book";

const bookPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(bookPromise);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default AllBooks;
