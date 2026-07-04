

const Book = ({book}) => {
    return (
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={book.image} alt={book.bookName} />
          </figure>
          <div className="flex gap-4 mt-2">
            {book.tags.map((tag) => (
              <div className="badge badge-soft badge-success font-bold">
                {tag}
              </div>
            ))}
          </div>
          <div className="card-body">
            <h2 className="card-title text-2xl">{book.bookName}</h2>
            <p className="font-semibold text-gray-400">By: {book.author}</p>
            <div className="card-actions border-t border-dashed border-gray-300 pt-4 flex justify-between">
              <div className="text-xl font-semibold">{book.category}</div>
              <div className="text-xl font-semibold">{book.rating}</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Book;