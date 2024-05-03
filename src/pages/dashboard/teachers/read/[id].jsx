
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../../../lib/supabase";
import Image from "next/image";
import AuthLayout from "../../../../components/AuthLayout";

const ReadPage = () => {
  const router = useRouter();
  const [teacher, setTeacher] = useState(null);
  const { id } = router.query;

  const fetcher = async () => {
    try {
      let { data, error } = await supabase
        .from("teacher")
        .select()
        .eq("id", id)
        .single();
      if (error) {
        throw error;
      }
      setTeacher(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetcher();
  }, [id]);

  if (!teacher) {
    return <div></div>; // You can replace this with a loading spinner or any other loading indicator
  }

  return (
    <AuthLayout>
    <div
      className="min-h-screen bg-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">{teacher?.name}</h1>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="col-span-1">
              {teacher.photo && (<Image
                src={teacher?.photo}
                height={300}
                width={300}
                alt={teacher?.name}
                className="rounded-lg shadow-md shadow-black"
              />)}
            </div>
            <div className="col-span-1">
              <div>
                <h2 className="text-lg font-semibold mb-2">تایبەتمەندیی: </h2>
                <p>{teacher.specialty}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">پرۆفایل: </h2>
                <p>{teacher?.bio}</p>
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

