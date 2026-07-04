
import BookImg from "../../assets/banner.png"



const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-16">
      <div className="hero bg-[#F3F3F3] rounded-3xl h-140">
        <div className="hero-content flex-col-reverse lg:flex-row justify-between items-center w-full px-12 lg:px-24">
          {/* Left Side */}
          <div className="max-w-xl">
            <h1 className="text-5xl leading-tight font-bold text-black">
              Books to freshen up
              
              your bookshelf
            </h1>

            <button className="btn bg-[#23BE0A] hover:bg-[#1FA509] border-none text-white mt-10 px-8">
              View The List
            </button>
          </div>

          {/* Right Side */}
          <img
            src={BookImg}
            alt="Book"
            className="w-[320px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
