import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../../../lib/supabase";
import AuthLayout from "../../../../components/AuthLayout";
import { courseType, formatDate } from "../../../../lib/utility_functions";

const ReadPage = () => {
  const router = useRouter();
  const [course, setCourse] = useState(null);
  const { id } = router.query;

  const fetcher = async () => {
    try {
      let { data, error } = await supabase
        .from("course")
        .select()
        .eq("id", id)
        .single();
      if (error) {
        throw error;
      }
      setCourse(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetcher();
  }, [id]);

  if (!course) {
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
            <h1 className="text-2xl font-semibold mb-4">{course?.title}</h1>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="col-span-1">
                <div>
                  <h2 className="text-lg font-semibold mb-2">رۆژی دەستپێک</h2>
                  <p>{formatDate(course?.start)}</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">رۆژی کۆتایی</h2>
                  <p>{formatDate(course?.end)}</p>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ReadPage;
