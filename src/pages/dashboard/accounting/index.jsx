import React from "react";
import AuthLayout from "../../../components/AuthLayout";
import DashCmp from "../../../components/DashCmp";
import IncomeForm from "../../../components/accounting/IncomeForm";
import Head from "next/head";
import AllAccounting from "../../../components/accounting/AllAccounting";

const Expenses = () => {
  return (
    <AuthLayout>
      <Head>
        <title>ژمێریاریی راڤە</title>
      </Head>
      <DashCmp>
        <AllAccounting />
      </DashCmp>
    </AuthLayout>
  );
};

export default Expenses;
