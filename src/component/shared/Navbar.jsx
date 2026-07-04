import { NavLink } from "react-router";
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
            <NavLink
              className={({ isActive }) =>
                `font-semibold mr-2 ${isActive ? "text-green-500 border border-green-500" : ""}`
              }
              to={"./"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `font-semibold mr-2  ${isActive ? "text-green-500 border border-green-500" : ""}`
              }
              to={"./books"}
            >
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `font-semibold mr-2 ${isActive ? "text-green-500 border border-green-500" : ""}`
              }
              to={"./page-to-read"}
            >
              Pages to Read
            </NavLink>
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
