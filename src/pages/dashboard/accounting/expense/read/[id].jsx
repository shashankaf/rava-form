import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AuthLayout from "../../../../../components/AuthLayout";
import { supabase } from "../../../../../lib/supabase";
import { formatDate } from "../../../../../lib/utility_functions";
import ReadItem from "../../../../../components/ReadItem";

const ReadPage = () => {
  const router = useRouter();
  const [expense, setExpense] = useState(null);
  const { id } = router.query;

  const fetcher = async () => {
    try {
      let { data, error } = await supabase
        .from("expense")
        .select(`*, teacher(*), course(*), student(*), items(*)`)
        .eq("id", id)
        .single();
      if (error) {
        throw error;
      }
      setExpense(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetcher();
  }, [id]);

  if (!expense) {
    return <div></div>;
  }

  return (
    <AuthLayout>
      <div
        className="min-h-screen bg-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8"
        dir="rtl"
      >
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-2">بڕی خەرجی</h2>
            <h1 className="text-2xl font-semibold mb-4">${expense?.amount}</h1>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="col-span-1">
                <ReadItem label="جۆر" value={expense.expense_type} />
                <ReadItem label="رێکەوت" value={formatDate(expense.created_at)} />
                {expense.teacher !== null ? <>
                  <ReadItem label="مامۆستا" value={expense.teacher.name} />
                  <ReadItem label="خوێندکار" value={expense.student.name} />
                  <ReadItem label="خول" value={expense.course.name} />
                </>
                  : <ReadItem label="شمەک" value={expense.items.title} />
                   }
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ReadPage;
