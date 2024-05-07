// pages/dashboard.js

import React from "react";
import DashCmp from "../../components/DashCmp";
import AuthLayout from "../../components/AuthLayout";
import localFont from 'next/font/local';
import Head from "next/head";

const shasenem = localFont({src: '../../pages/fonts/shasenem.ttf'})

const Dashboard = () => {
  return (
    <AuthLayout>
      <Head>
        <title>داشبۆردی راڤە</title>
      </Head>
      <h1 className={`${shasenem.className} text-3xl font-bold text-center`}>
        بەخێربێیت بۆ داشبۆردی راڤە
      </h1>
      <DashCmp />
    </AuthLayout>
  );
};

export default Dashboard;
