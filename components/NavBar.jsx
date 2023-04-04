import {useState} from "react";
import Link from "next/link";
import Logo from "../assets/lbdeyo-designer-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 shadow-black shadow-md bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <img
                className="block lg:hidden  mr-0"
                style={{width: "200px"}}
                src={Logo.src}
                alt="Logo"
              />
              <img
                className="hidden lg:block mr-0"
                style={{width: "200px"}}
                src={Logo.src}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="-mr-2 flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false">
              <svg
                className="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="font-bold text-gray-700">
                Home
              </Link>
            </div>
            <div className="ml-10 flex items-baseline">
              <Link href="/" className="ml-4 font-medium text-gray-600">
                About
              </Link>
              <Link href="/" className="ml-4 font-medium text-gray-600">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "" : "hidden"} lg:hidden`}>
        <div className="pt-2 pb-3">
          <Link
            href="/"
            className="block pl-3 pr-4 py-2 font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
            Home
          </Link>
          <Link
            href="/"
            className="block pl-3 pr-4 py-2 font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 mt-1">
            About
          </Link>
          <Link
            href="/"
            className="block pl-3 pr-4 py-2 font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 mt-1">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
