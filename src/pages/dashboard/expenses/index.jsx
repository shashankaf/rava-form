import React from "react";
import AuthLayout from "../../../components/AuthLayout";
import DashCmp from "../../../components/DashCmp";
import IncomeForm from "../../../components/expenses/IncomeForm";
import Head from "next/head";

const Expenses = () => {
  return (
    <AuthLayout>
      <Head>
        <title>Income & Expense - Rava</title>
      </Head>
      <DashCmp>
        <IncomeForm />
      </DashCmp>
    </AuthLayout>
  );
};

export default Expenses;
