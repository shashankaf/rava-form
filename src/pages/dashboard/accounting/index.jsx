import React from "react";
import AuthLayout from "../../../components/AuthLayout";
import DashCmp from "../../../components/DashCmp";
import Head from "next/head";
import AllAccounting from "../../../components/accounting/AllAccounting";
import GeneralTable from "../../../components/GeneralTable";

const Expenses = () => {
  const items = [{id:1, income: 800, student: {name: 'hi'}, course: {title: 'bye'}}]
  const labels = [{id:1, title: "داهات"}, {id: 2, title: "خوێندکار"}, {id: 3, title: "خول"}]
  return (
    <AuthLayout>
      <Head>
        <title>ژمێریاریی راڤە</title>
      </Head>
      <DashCmp>
        <AllAccounting />
        <GeneralTable 
          title={"داهات"}
          createRoute="dashboard/accounting/create"
          editRoute="dashboard/accounting/edit"
          readRoute="dashboard/accounting/read"
          items={items}
          table="income"
          labels={labels}
        />
      </DashCmp>
    </AuthLayout>
  );
};

export default Expenses;
