import { Link } from "react-router";

const EmptyBookList = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-green-200 blur-3xl rounded-full opacity-40"></div>

            <div className="relative w-40 h-52 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center">
              <span className="text-7xl">📚</span>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-gray-800">
          Your Read List is Empty
        </h2>

        <p className="mt-5 text-gray-500 leading-8 text-lg">
          Looks like you haven't marked any books as read yet. Start exploring
          and build your personal reading collection.
        </p>

        <Link
          to="/"
          className="btn mt-8 bg-[#23BE0A] hover:bg-green-700 border-none text-white px-8"
        >
          Explore Books
        </Link>
      </div>
    </div>
  );
};

export default EmptyBookList;
