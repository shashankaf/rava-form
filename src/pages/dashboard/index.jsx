// pages/dashboard.js

import React from "react";
import DashCmp from "../../components/DashCmp";

const Dashboard = () => {
  return (
    <>
      <h1 className={` text-2xl font-bold text-center`}>
        بەخێربێیت بۆ داشبۆردی راڤە
      </h1>
      <DashCmp />
    </>
  );
};

export default Dashboard;
