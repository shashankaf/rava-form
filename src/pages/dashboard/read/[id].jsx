import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../../lib/supabase";

const ReadPage = () => {
  const router = useRouter();
  const [student, setStudent] = useState(null)
  const { id } = router.query;

  const fetcher = async () => {
    try {
      let { data: student, error } = await supabase.from("student").select().eq('id', id).single();
      if (error) {
        throw error;
      }
      setStudent(student);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => { fetcher() }, [id]);
  if (!student) {
    return <div></div>; // You can replace this with a loading spinner or any other loading indicator
  }
  return (
    <div className="min-h-screen bg-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">{student.name}</h1>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">پۆل: </h2>
              <p>{student.class}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">خوێندنگە:</h2>
              <p>{student.school}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">بڕی پارەی یەکەم</h2>
              <p>{student.first_pay}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">بڕی پارەی دووەم</h2>
              <p>{student.second_pay}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">بەش</h2>
              <p>{student.cohort}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">جۆری خوێن: </h2>
              <p>{student.blood}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">تەلەفۆن: </h2>
              <p>{student.phone}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">ناونیشان: </h2>
              <p>{student.address}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">هاتووچۆ: </h2>
              <p>{student.travel}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">باری تەندروستی: </h2>
              <p>{student.health}</p>
            </div>
            {/* Add more details as needed */}
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">مامۆستایان: </h2>
            <ul>
              {student.teachers.map((teacher, index) => (
                <li key={index}>
                  <p>{teacher.name}</p>
                  <p>{teacher.profession}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">بڵاوکراوەتەوە؟</h2>
            <p>{student.publish ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadPage;
