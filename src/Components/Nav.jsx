import { Link } from "react-router-dom";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" w-full flex items-center justify-between relative px-4 py-4    md:px-10 ">
      <div className="Desktop lg:flex hidden gap-14  ">
       
        <Link to="/Suits" className=" px-3 font-extrabold rounded">
          SUITS
        </Link>
        <Link to="/Swag" className=" px-3 font-extrabold rounded">
          SWAG
        </Link>

        <Link to="/Tradition" className=" px-3 font-extrabold rounded">
          TRADITION
        </Link>
        <Link to="/Bracelets" className=" px-3  font-extrabold rounded">
          BRACELETS
        </Link>
        <Link to="/" className=" px-3  font-extrabold  rounded">
          HOME
        </Link>
        <Link to="/Jews" className=" px-3  font-extrabold rounded">
          JEWELERY
        </Link>
        <Link to="/Designers" className=" px-3  font-extrabold rounded">
          DESIGNERS
        </Link>
        <Link to="/Testimonials" className=" px-3 font-extrabold rounded">
          TESTIMONIALS
        </Link>
        <Link to="/About" className=" px-3 font-extrabold rounded">
          ABOUT
        </Link>
      </div>
      logo
      <button
        onClick={() => setOpen(!open)}
        className="mobile-responsive lg:hidden flex"
      >
        <HiOutlineMenuAlt3 className=" w-6 h-6" />
      </button>
      <div
        className={`mobile-responsive z-50 lg:hidden h-full top-[100%] 
       ${
         open ? "right-0" : "-right-full"
       } w-2/3 border border-gray-600 bg-slate-600 rounded
         flex flex-col duration-300`}
      >
        <div>
          
        </div>
        <div className="flex flex-col gap-3 mt-2">
          <Link to="/" className=" font-mono text-xl">
            Home
          </Link>
          <Link to="/Suits" className=" font-sans text-xl">
          Suits
          </Link>
          <Link to="/Swag" className=" font-sans text-xl">
            Swag
          </Link>
          <Link to="/Tradition" className=" font-sans text-xl">
            Tradition
          </Link>

          <Link to="/Bracelets" className=" font-sans text-xl">
            Bracelets
          </Link>
          <Link to="/Jewelery" className=" font-sans text-xl">
            Jewelery
          </Link>
          <Link to="/Designers" className=" font-sans text-xl">
            Designers
          </Link>
          <Link to="/Testimonials" className=" font-sans text-xl">
            Testimonials
          </Link>
          <Link to="/About" className=" font-sans text-xl">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
