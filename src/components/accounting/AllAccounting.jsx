import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import localFont from 'next/font/local';

const shasenem = localFont({src: '../../pages/fonts/shasenem.ttf'})

const AllAccounting = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const incomeFetcher = async () => {
    try {
      const { data, error } = await supabase.rpc("get_total_income");
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
      const { data, error } = await supabase.rpc("get_total_expense");
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

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gradient-to-r from-gray-700 to-black p-6 shadow-md py-8">
        <div className="bg-indigo-500 rounded-lg p-4 text-center text-white font-semibold">
          <h3 className={`${shasenem.className} text-2xl text-blue-100`}>داهات</h3>
          <p className="text-3xl mt-2">IQD {income}</p>
        </div>
        <div className="bg-red-500 rounded-lg p-4 text-center text-white font-semibold mt-4 md:mt-0">
          <h3 className={`${shasenem.className} text-2xl text-red-100`}>خەرجی</h3>
          <p className="text-3xl mt-2">IQD {expense}</p>
        </div>
        <div className="bg-green-500 rounded-lg p-4 text-center text-white font-semibold mt-4 md:mt-0">
          <h3 className={`${shasenem.className} text-2xl text-green-100`}>دەستمایە</h3>
          <p className="text-3xl mt-2">IQD {income - expense}</p>
        </div>
      </div>
    </>
  );
};

export default AllAccounting;
