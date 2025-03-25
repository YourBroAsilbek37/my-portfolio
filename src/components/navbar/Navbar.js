import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo2} from "../../assets/index"
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  const [isOpen, setIsOpen] = useState(false);
   const handleOverlayClick = (e) => {
    if (e.target.id === "drawer-overlay") {
      setIsOpen(false);
    }
  };
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className='w-[60px] h-[60px] flex items-center gap-3'>
        <img className='rounded-full border-[3px] border-[#282C31]' src={logo2} alt="logo" />
        <h1 className='text-[20px] font-semibold'>ZetsuCoder</h1>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        {/* <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span> */}
         <div className="mdl:hidden">
      {/* Open Drawer Button */}
      <div className="text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="text-white   focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  mb-2  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        </button>
      </div>

      {/* Overlay to close drawer when clicking outside */}
      {isOpen && (
        <div
          id="drawer-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={handleOverlayClick}
        ></div>
      )}

      {/* Drawer Component */}
      <div
        className={`fixed top-0 right-0 z-40 h-screen p-6 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 shadow-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Logo + Text at the top */}
        <div className="flex items-center justify-between mb-4">
          <div className='w-[60px] h-[60px] flex items-center gap-1'>
        <img className='rounded-full  border-[3px] border-[#282C31]' src={logo2} alt="logo" />
        <h1 className='text-[18px] font-semibold'>ZetsuCoder</h1>
      </div>

          {/* Close Button (Red, on the Right) */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-red-500 hover:bg-red-200 hover:text-red-700 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-red-600 dark:hover:text-white"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>

        {/* Separator Line */}
        <hr className="border-gray-300 dark:border-gray-600 mb-6" />

        {/* Navigation Links */}
        <nav className="space-y-4">
          {navLinksdata.map(({ title, link }, index) => (
            <Link
              key={index}
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block text-xl font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)} // Close drawer on link click
            >
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
        
      </div>
    </div>
  );
}

export default Navbar