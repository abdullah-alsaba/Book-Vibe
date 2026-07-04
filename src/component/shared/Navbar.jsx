import "../../index.css";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto px-30">
      <div className="navbar-start">
        <a className=" text-xl text-black font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>Listed Books</li>
          <li>
            <a>Pages to Read</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
        <a className="btn btn-success text-white font-bold">Sign In </a>
        <a className="btn btn-info text-white font-bold">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
