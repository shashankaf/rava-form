
// pages/dashboard.js

import React from 'react';
import Link from 'next/link';
import localFont from "next/font/local";

const shasenem = localFont({ src: "../pages/fonts/shasenem.ttf" });

const Dashboard = ({children}) => {

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      setErrMsg("ببورە هەڵەیەک روویداوە");
      console.log(error);
    } else {
      router.reload();
    }
  };

  return (
    <div dir="rtl" className="flex">
      <div  className="bg-gray-100 text-gray-900 w-1/5 min-h-screen flex flex-col rounded-tl-3xl rounded-bl-3xl">
        <Link className={`${shasenem.className} block py-4 px-6 hover:bg-gray-200 transition-400`} href="/dashboard/students">
          خوێندکاران
        </Link>
        <Link className={`${shasenem.className} block py-4 px-6 hover:bg-gray-200 transition-400`}  href="/dashboard/teachers">
          مامۆستایان
        </Link>
        <Link className={`${shasenem.className} block py-4 px-6 hover:bg-gray-200 transition-400`} href="/dashboard/cohorts">
          خولەکان
        </Link>
        <div className={`${shasenem.className} cursor-pointer block py-4 px-6 hover:bg-gray-300 transition-400`} onClick={signOut}>
          دەرچوون لە ئەکاونت        
        </div>
      </div>
      <div className="flex-1 p-4">
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
