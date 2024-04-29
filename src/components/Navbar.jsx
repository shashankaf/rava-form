import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = ({ children }) => {
  const imgUrl =
    "https://grocviikgcjxaxnkdvrv.supabase.co/storage/v1/object/public/general/rava-removebg-preview.png?t=2024-04-29T11%3A16%3A12.305Z";
  return (
    <>
      <nav className="bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <Image
              src={imgUrl}
              width={75}
              height={75}
              alt="Rava Institute Logo"
            />
          </Link>
          <div className="">
            <ul className="font-medium flex mt-4 border border-gray-100 rounded-lg bg-gray-50">
              <li>
                <Link href="/contact" className="block py-2 px-3 text-gray-900 hover:text-indigo-900 transition-300">
                  پەیوەندی
                </Link>
              </li>
              <li>
                <Link href="/teachers" className="block py-2 px-3 text-gray-900 hover:text-indigo-900 transition-300">
                 مامۆستایان
                </Link>
              </li>
              <li>
                <Link href="/form" className="block py-2 px-3 text-gray-900 hover:text-indigo-900 transition-300">
                  فۆرم
                </Link>
              </li>
              <li>
                <Link href="/" className="block py-2 px-3 text-gray-900 hover:text-indigo-900 transition-300">
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
