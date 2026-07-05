import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen bg-[#F7F8F8] flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        {/* 404 */}
        <h1 className="text-[120px] md:text-[180px] font-extrabold text-[#23BE0A] leading-none">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mt-2">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-5 text-gray-500 text-lg leading-8 max-w-xl mx-auto">
          Sorry, the page you are looking for doesn't exist or may have been
          moved. Let's get you back to exploring amazing books.
        </p>

        {/* Book Illustration */}
        <div className="flex justify-center my-10">
          <div className="relative">
            <div className="absolute inset-0 bg-green-200 blur-3xl rounded-full opacity-40"></div>

            <div className="relative w-40 h-52 bg-white rounded-xl shadow-xl border border-gray-200 flex flex-col items-center justify-center">
              <div className="w-24 h-2 bg-[#23BE0A] rounded mb-3"></div>

              <div className="w-20 h-2 bg-gray-300 rounded mb-2"></div>

              <div className="w-16 h-2 bg-gray-300 rounded mb-6"></div>

              <span className="text-6xl">📖</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="btn bg-[#23BE0A] hover:bg-green-700 border-none text-white px-8"
          >
            Back to Home
          </Link>

          <Link
            to="/books"
            className="btn btn-outline border-[#23BE0A] text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white"
          >
            Browse Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
