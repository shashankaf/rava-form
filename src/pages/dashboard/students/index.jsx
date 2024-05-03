import React, { useEffect } from "react";
import Head from "next/head";
import DashboardCmp from "../../../components/DashboardCmp";
import AuthLayout from "../../../components/AuthLayout";

const Dashboard = () => {

  return (
    <AuthLayout>
      <Head>
        <title>Rava Registeration Form</title>
        <meta name="description" content="Learner Dashboard - Rava Institute" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardCmp />
    </AuthLayout>
  );
};

export default Dashboard;
