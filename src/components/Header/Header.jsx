import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink className="font-semibold text-[#757575]" to="/">
          Statistice
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold text-[#757575]" to="/applied">
          Jobs Applied
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold text-[#757575]" to="/blog">
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <header className="header">
      <div className="navbar container mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a href="/" className="text-xl text-[#1A1919]">
            CareerHub
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn primary__btn">Star Applying</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
