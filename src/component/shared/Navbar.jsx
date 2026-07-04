import { NavLink } from "react-router";


const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "border border-[#23BE0A] text-[#23BE0A] rounded-lg px-5 py-2 font-semibold transition"
      : "px-5 py-2 font-semibold text-gray-500 hover:text-[#23BE0A] transition";

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="navbar p-0">
        {/* Logo */}
        <div className="navbar-start">
          <a className="text-3xl font-extrabold text-black cursor-pointer">
            Book Vibe
          </a>
        </div>

        {/* Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/books" className={navLinkClass}>
                Listed Books
              </NavLink>
            </li>

            <li>
              <NavLink to="/page-to-read" className={navLinkClass}>
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="navbar-end gap-4">
          <button className="btn bg-[#23BE0A] hover:bg-[#1FA509] border-none text-white px-7">
            Sign In
          </button>

          <button className="btn bg-[#59C6D2] hover:bg-[#4DBAC6] border-none text-white px-7">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
