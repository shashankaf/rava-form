import React from "react";
import AuthLayout from "../../../components/AuthLayout";
import Head from "next/head";
import DashCmp from "../../../components/DashCmp";
import AllShares from "../../../components/share/AllShares";

const SharePage = () => {
  return (
    <AuthLayout>
      <Head>
        <title>پشکی مامۆستایان</title>
      </Head>
      <DashCmp>
        <AllShares />
      </DashCmp>
    </AuthLayout>
  );
};

export default SharePage;
