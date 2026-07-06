import { useContext } from "react";
import { BookContext } from "../../../routes/Context/BookProviderContext";

const ExpectedBook = ({ expectedBook }) => {

  const { handelReadButton } = useContext(BookContext);
 


  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Image */}
        <div className="lg:w-105 bg-gray-100 rounded-xl flex justify-center items-center p-10">
          <img
            src={expectedBook.image}
            alt={expectedBook.bookName}
            className="w-72 object-contain"
          />
        </div>

        {/* Details */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold font-serif">
            {expectedBook.bookName}
          </h1>

          <p className="text-gray-500 text-lg mt-3">
            By : {expectedBook.author}
          </p>

          <div className="border-y border-gray-200 py-5 my-6">
            <p className="text-lg">{expectedBook.category}</p>
          </div>

          <p className="text-gray-500 leading-8">
            <span className="font-bold text-black">Review :</span>{" "}
            {expectedBook.review}
          </p>

          <div className="flex items-center gap-4 mt-8">
            <span className="font-semibold">Tag</span>

            <div className="flex gap-3 flex-wrap">
              {expectedBook.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-600 px-4 py-1 rounded-full font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="border-y border-gray-200 my-8 py-6 space-y-4">
            <div className="flex">
              <span className="w-48 text-gray-500">Number of Pages:</span>
              <span className="font-bold">{expectedBook.totalPages}</span>
            </div>

            <div className="flex">
              <span className="w-48 text-gray-500">Publisher:</span>
              <span className="font-bold">{expectedBook.publisher}</span>
            </div>

            <div className="flex">
              <span className="w-48 text-gray-500">Year of Publishing:</span>
              <span className="font-bold">{expectedBook.yearOfPublishing}</span>
            </div>

            <div className="flex">
              <span className="w-48 text-gray-500">Rating:</span>
              <span className="font-bold">{expectedBook.rating}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              className="btn bg-white border border-gray-400 text-black hover:bg-gray-100"
              onClick={() => 
             
                  handelReadButton(expectedBook)
              }
            >
              Read
            </button>

            <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white border-none">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpectedBook;
