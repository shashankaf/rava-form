import React, { useState } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/router";

const shasenem = localFont({ src: "../pages/fonts/shasenem.ttf" });

const Dashboard = ({ children }) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      setErrMsg("ببورە هەڵەیەک روویداوە");
    } else {
      router.reload();
    }
  };

  return (
    <div dir="rtl" className="flex flex-col md:flex-row">
      <button
        className="md:hidden bg-gray-100 text-gray-900 py-2 px-4 rounded-tl-3xl rounded-bl-3xl"
        onClick={toggleMenu}
      >
        پەڕەکان ↓
      </button>
      <div
        className={`${
          menuOpen ? "block" : "hidden md:block"
        } bg-gray-100 text-gray-900 w-full md:w-1/5 min-h-screen flex flex-col rounded-tl-3xl rounded-bl-3xl`}
      >
        <Link
          className={`${shasenem.className} block py-4 px-6 hover:bg-gray-200 transition-400`}
          href="/dashboard/students"
        >
          خوێندکاران
        </Link>
        <Link
          className={`${shasenem.className} block py-4 px-6 hover:bg-gray-200 transition-400`}
          href="/dashboard/teachers"
        >
          مامۆستایان
        </Link>
        <Link
          className={`${shasenem.className} block py-4 px-6 hover:bg-gray-200 transition-400`}
          href="/dashboard/courses"
        >
          خولەکان
        </Link>
        <Link
          className={`${shasenem.className} block py-4 px-6 hover:bg-gray-200 transition-400`}
          href="/dashboard/shares"
        >
          پشکەکان
        </Link>
        <Link
          className={`${shasenem.className} block py-4 px-6 hover:bg-gray-200 transition-400`}
          href="/dashboard/accounting"
        >
          سندوق
        </Link>
        <div
          className={`${shasenem.className} cursor-pointer block py-4 px-6 hover:bg-gray-300 transition-400`}
          onClick={signOut}
        >
          دەرچوون لە ئەکاونت
        </div>
      </div>
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

export default Dashboard;
