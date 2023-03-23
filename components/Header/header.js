import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  const [scrollPos, setScrollPos] = useState(0);
  const [headerClass, setHeaderClass] = useState('');
  const [loginstyle, setLoginstyle] = useState('');


  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    if (scrollPos > 0) {
      setHeaderClass('bg-white shadow-md');
      setLoginstyle(' text-primary');
    } else {
      setHeaderClass('');
      setLoginstyle('');
    }
  }, [scrollPos]);


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrollPos > 0 ? "text-[#62647D]": "text-white"}  ${headerClass}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex-shrink-0">
            <Link href="/" legacyBehavior>
              <a className="font-bold text-2xl">Spyberrys</a>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" legacyBehavior>
                <a className=" hover:text-gray-200 font-semibold text-[14px] pr-[15px]">
                  Home
                </a>
              </Link>
              <Link href="/about" legacyBehavior>
                <a className=" hover:text-gray-200 font-semibold text-[14px] pr-[15px]">
                  About
                </a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className=" hover:text-gray-200  pr-[15px] font-semibold text-[14px]">
                  Contact
                </a>
              </Link>

              <Link href="/signup" legacyBehavior>
                <a className=" hover:text-gray-200 font-semibold text-[14px] pr-[15px]">
                  Signup
                </a>
              </Link>

              <Link href="/login">
                <button className={` ${loginstyle} ${scrollPos > 0 ? "pl-[12px] pr-[12px] pt-[6px] pb-[6px] text-[13px] border-[1px] border-primary rounded-md font-bold  hover:bg-primary hover:text-[white] hover:border-primary": "pl-[12px] pr-[12px] pt-[6px] pb-[6px] text-[13px] border-[1px] border-white rounded-md font-bold  hover:bg-primary hover:text-[white] hover:border-primary"}`}>
                  Login
                </button>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={isOpen ? "block" : "hidden"}>
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/" legacyBehavior>
            <a className="text-gray-800 hover:text-gray-600 font-medium block px-3 py-2 rounded-md text-base">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-gray-800 hover:text-gray-600 font-medium block px-3 py-2 rounded-md text-base">About</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-gray-800 hover:text-gray-600 font-medium block px-3 py-2 rounded-md text-base">Contact</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
