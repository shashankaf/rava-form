import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

const AllAccounting = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const incomeFetcher = async () => {
    try {
      const { data, error } = await supabase.rpc("get_total_income");
      if(error) {
        console.log(error)
      }
      setIncome(data)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    incomeFetcher()
  }, [])

  const expenseFetcher = async () => {
    try {
      const { data, error } = await supabase.rpc("get_total_expense");
      if(error) {
        console.log(error)
      }
      setExpense(data)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    expenseFetcher()
  }, [])

  return (
    <>
      <div className="bg-gray-100 rounded-lg p-4 shadow-md flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-green-600">کۆی داهات</h3>
          <p className="text-xl font-bold text-green-800">
            ${income}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-red-600">کۆی خەرجی</h3>
          <p className="text-xl font-bold text-red-800">
            ${expense}
          </p>
        </div>
      </div>
    </>
  );
};

export default AllAccounting;
