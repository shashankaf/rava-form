import React, { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import AuthLayout from "../../../components/AuthLayout";
import DashCmp from "../../../components/DashCmp";
import Head from "next/head";
import AllAccounting from "../../../components/accounting/AllAccounting";
import { supabase } from "../../../lib/supabase";
import GeneralTable from "../../../components/GeneralTable";
import CollapsibleSection from "../../../components/CollapsibleSection";

const AccountingDashboard = () => {
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const router = useRouter()

  const incomeFetcher = async () => {
    try {
      const { data, error } = await supabase
        .from("income")
        .select(`*, student(*), course(*)`);
      if (error) {
        console.log(error);
      }
      setIncome(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    incomeFetcher();
  }, []);

  const expenseFetcher = async () => {
    try {
      const { data, error } = await supabase.from("expense").select();
      if (error) {
        console.log(error);
      }
      setExpense(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    expenseFetcher();
  }, []);

  const income_labels = [
    { id: 1, title: "بڕ" },
    { id: 2, title: "خوێندکار" },
    { id: 3, title: "خول" },
  ];
  const expense_labels = [
    { id: 1, title: "بڕ" },
    { id: 2, title: "جۆر" },
    { id: 3, title: "رێکەوت" },
  ];

  const goCreate = () => {
    router.push("/dashboard/accounting/expense/create")
  };

  return (
    <AuthLayout>
      <Head>
        <title>ژمێریاریی راڤە</title>
      </Head>
      <DashCmp>
        <AllAccounting />
        <CollapsibleSection title="داهات" state={true}>
        <GeneralTable
          createRoute="/dashboard/accounting/income/create"
          editRoute="/dashboard/accounting/income/edit/"
          readRoute="/dashboard/accounting/income/read/"
          items={income}
          table="income"
          labels={income_labels}
        />
        </CollapsibleSection>
        <CollapsibleSection title="خەرجی" state={false}>
        <GeneralTable
          createRoute="/dashboard/accounting/expense/create/"
          editRoute="/dashboard/accounting/expense/edit/"
          readRoute="/dashboard/accounting/expense/read/"
          items={expense}
          table="expense"
          labels={expense_labels}
        />
        </CollapsibleSection>
      </DashCmp>
    </AuthLayout>
  );
};

export default AccountingDashboard;
