import React from "react";
import AuthLayout from "../../../components/AuthLayout";
import DashCmp from "../../../components/DashCmp";
import IncomeForm from "../../../components/expenses/IncomeForm";

const Expenses = () => {
  return (
    <AuthLayout>
      <DashCmp>
        <IncomeForm />
      </DashCmp>
    </AuthLayout>
  );
};

export default Expenses;
