import React from "react";
import AuthLayout from "../../../components/AuthLayout";
import DashCmp from "../../../components/DashCmp";
import IncomeForm from "../../../components/accounting/IncomeForm";
import Head from "next/head";

const Expenses = () => {
  return (
    <AuthLayout>
      <Head>
        <title>ژمێریاریی راڤە</title>
      </Head>
      <DashCmp>
        <IncomeForm />
      </DashCmp>
    </AuthLayout>
  );
};

export default Expenses;
