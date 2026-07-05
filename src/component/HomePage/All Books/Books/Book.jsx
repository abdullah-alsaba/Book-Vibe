import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="card w-full bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
    >
      <figure className="bg-[#F3F3F3] p-8 m-6 rounded-2xl">
        <img
          src={book.image}
          alt={book.bookName}
          className="h-56 object-contain"
        />
      </figure>

      <div className="card-body pt-0">
        <div className="flex gap-3">
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-4">{book.bookName}</h2>

        <p className="text-gray-500 font-medium">By : {book.author}</p>

        <div className="border-t border-dashed border-gray-300 mt-5 pt-5 flex justify-between items-center">
          <span className="text-gray-600 font-medium">{book.category}</span>

          <span className="flex items-center gap-2 font-semibold">
            {book.rating}
            <FaRegStar />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Book;
