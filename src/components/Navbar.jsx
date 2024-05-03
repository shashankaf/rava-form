import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const shasenem = localFont({ src: "../pages/fonts/shasenem.ttf" });

const Navbar = ({ children }) => {
  const imgUrl =
    "https://grocviikgcjxaxnkdvrv.supabase.co/storage/v1/object/public/general/rava-removebg-preview.png?t=2024-04-29T11%3A16%3A12.305Z";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`${shasenem.className} text-xl bg-white`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <Image
              src={imgUrl}
              width={75}
              height={75}
              alt="Rava Institute Logo"
            />
          </Link>
          <div className="lg:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </div>
          <div
            className={`lg:flex lg:flex-col lg:items-center ${isMenuOpen ? "block" : "hidden"}`}
          >
            <ul className="font-medium flex flex-wrap mt-4 mx-auto border border-gray-100 rounded-lg bg-gray-50">
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 text-gray-900 hover:text-indigo-900 transition-300"
                >
                  پەیوەندی
                </Link>
              </li>
              <li>
                <Link
                  href="/teachers"
                  className="block py-2 px-3 text-gray-900 hover:text-indigo-900 transition-300"
                >
                  مامۆستایان
                </Link>
              </li>
              <li>
                <Link
                  href="/form"
                  className="block py-2 px-3 text-gray-900 hover:text-indigo-900 transition-300"
                >
                  فۆرم
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-gray-900 hover:text-indigo-900 transition-300"
                >
                  ماڵەوە
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Navbar;
