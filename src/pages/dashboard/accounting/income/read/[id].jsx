import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AuthLayout from "../../../../../components/AuthLayout";
import { supabase } from "../../../../../lib/supabase";
import { formatDate } from "../../../../../lib/utility_functions";

const ReadPage = () => {
  const router = useRouter();
  const [income, setIncome] = useState(null);
  const { id } = router.query;

  const fetcher = async () => {
    try {
      let { data, error } = await supabase
        .from("income")
        .select(`*, student(*), course(*)`)
        .eq("id", id)
        .single();
      if (error) {
        throw error;
      }
      setIncome(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetcher();
  }, [id]);

  if (!income) {
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
            <h2 className="text-lg font-semibold mb-2">بڕی داهات</h2>
            <h1 className="text-2xl font-semibold mb-4">${income?.amount}</h1>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="col-span-1">
                <div>
                  <h2 className="text-lg font-semibold mb-2">خوێندکار</h2>
                  <p>{income?.student?.name}</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">خول</h2>
                  <p>{income?.course?.title}</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">رێکوت</h2>
                  <p>{formatDate(income?.created_at)}</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ReadPage;
