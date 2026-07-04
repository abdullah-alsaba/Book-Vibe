
import "../../index.css";

const Error = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-400 text-lg leading-relaxed">
          The page you're looking for doesn't exist, has been moved, or the URL
          might be incorrect.
        </p>

        {/* Illustration */}
        <div className="mt-10 flex justify-center">
          <div className="relative">
            <div className="w-36 h-36 rounded-full bg-cyan-500/20 blur-3xl absolute"></div>

            <svg
              className="relative w-36 h-36 text-cyan-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.172 9.172a4 4 0 015.656 0m-5.656 5.656a4 4 0 005.656 0M12 3v1m0 16v1m8-9h1M3 12H2m15.364-6.364l.707-.707M5.929 18.071l-.707.707m0-13.435l.707.707m12.728 12.728l-.707-.707"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
