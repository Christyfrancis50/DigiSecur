import { useState } from "react";
import Img from "../../assets/DigiSecur_logo.png";
import { IoIosArrowDropright, IoIosMenu, IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="navbar px-6 py-4 flex justify-between items-center">
        <div className="navbar-start">
        <Link to="/">
          <img className="w-[40vw] md:w-[20vw] lg:w-[15vw]" src={Img} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-end lg:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            {isOpen ? <IoIosClose /> : <IoIosMenu />}
          </button>
        </div>
        <div className={`navbar-center lg:flex ${isOpen ? "block" : "hidden"} w-full lg:w-auto`}>
          <ul className="menu menu-horizontal lg:flex lg:px-1 text-[3vw] md:text-[2vw] lg:text-[1vw] lg:space-x-6">
            <li className="my-2 lg:my-0">
              <Link to="/">Home</Link>
            </li>
            <li className="my-2 lg:my-0">
              <Link to="/about">About</Link>
            </li>
            <li className="my-2 lg:my-0">
              <Link to="/services">Services</Link>
            </li>
            <li className="my-2 lg:my-0">
              <Link to="/faq">FAQ</Link>
            </li>
            <li className="my-2 lg:my-0">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex navbar-end">
          <Link to="/quote" className="btn bg-gradient-to-r from-orange-500 to-blue-500 hover:from-blue-500 hover:to-orange-500 text-white">
            <IoIosArrowDropright className="text-xl" />
            Get A Quote
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center bg-base-100 shadow-sm px-6 py-4">
          <Link to="/quote" className="btn w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-blue-500 hover:to-orange-500 text-white">
            <IoIosArrowDropright className="text-xl" />
            Get A Quote
          </Link>
        </div>
      )}
    </div>
  );
};
