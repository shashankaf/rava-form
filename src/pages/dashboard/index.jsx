// pages/dashboard.js

import React from "react";
import DashCmp from "../../components/DashCmp";
import AuthLayout from "../../components/AuthLayout";

const Dashboard = () => {
  return (
    <AuthLayout>
      <h1 className={` text-2xl font-bold text-center`}>
        بەخێربێیت بۆ داشبۆردی راڤە
      </h1>
      <DashCmp />
    </AuthLayout>
  );
};

export default Dashboard;
