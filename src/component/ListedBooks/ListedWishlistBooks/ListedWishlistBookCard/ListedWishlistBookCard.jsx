import { GoPeople } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";


  
    const ListedWishlistBookCard = ({book}) => {
    const {
    bookName,
    author,
    image,
    tags,
    yearOfPublishing,
    totalPages,
    publisher,
    category,
    rating
  } = 
    book
  ;

    return (
      <div>
        <div className="border border-gray-200 rounded-2xl p-6 bg-white flex flex-col lg:flex-row gap-8">
          <figure className="bg-gray-100 rounded-xl p-6 w-52 shrink-0 flex justify-center items-center">
            <img src={image} alt={bookName} className="h-56 object-contain" />
          </figure>

          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold">{bookName}</h2>

            <p className="text-gray-600 font-medium">By : {author}</p>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="font-semibold">Tag</span>

                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-600 px-4 py-2 rounded-full font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-gray-500">
                <IoLocationOutline />
                <span>Year of Publishing: {yearOfPublishing}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 border-b border-gray-200 pb-5">
              <div className="flex items-center gap-2 text-gray-500">
                <GoPeople />
                <span>Publisher: {publisher}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-500">
                <MdOutlineLibraryBooks />
                <span>Page {totalPages}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <span className="bg-blue-100 text-blue-500 px-5 py-2 rounded-full">
                Category: {category}
              </span>

              <span className="bg-orange-100 text-orange-500 px-5 py-2 rounded-full">
                Rating: {rating}
              </span>

              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

    export default ListedWishlistBookCard; 