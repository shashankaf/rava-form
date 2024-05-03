import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../../../lib/supabase";
import AuthLayout from "../../../../components/AuthLayout";

const ReadPage = () => {
  const router = useRouter();
  const [student, setStudent] = useState(null);
  const [teacherIds, setTeacherIds] = useState([])
  const [teachers, setTeachers] = useState([])
  const { id } = router.query;

  const fetcher = async () => {
    try {
      let { data: student, error } = await supabase
        .from("student")
        .select(`*, class(*), blood(*), travel(*), ragaz(*), cohort(*)`)
        .eq("id", id)
        .single();
      if (error) {
        throw error;
      }
      setStudent(student);
      setTeacherIds(student.teacher)
    } catch (error) {
      console.log(error.message);
    }
  };

  const teacherFetcher = async() => {
    try {
      const {data, error} = await supabase.from('teacher').select().in('id', teacherIds)
      if(error) throw Error;
      setTeachers(data)
    } catch(e) {
      console.log(e)
    }
  }
  useEffect(() => {
    teacherFetcher()
  }, [teacherIds])

  useEffect(() => {
    fetcher();
  }, [id]);

  if (!student) {
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
          <h1 className="text-2xl font-semibold mb-4">{student?.name}</h1>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">پۆل: </h2>
              <p>{student.class?.title}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">خوێندنگە:</h2>
              <p>{student?.school}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">بڕی پارەی یەکەم</h2>
              <p>{student?.first_pay}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">بڕی پارەی دووەم</h2>
              <p>{student?.second_pay}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">خول</h2>
              <p>{student?.cohort?.title}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">جۆری خوێن: </h2>
              <p>{student?.blood?.title}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">تەلەفۆن: </h2>
              <p>{student?.phone}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">تەلەفۆنی ماڵەوە: </h2>
              <p>{student?.second_phone}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">ناونیشان: </h2>
              <p>{student?.address}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">هاتووچۆ: </h2>
              <p>{student?.travel?.title}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">باری تەندروستی: </h2>
              <p>{student?.health}</p>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">مامۆستایان: </h2>
            <ul>
              {teachers?.map((teacher) => (
                <li key={teacher?.id}>
                  <p>{teacher?.name} - {teacher?.specialty}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">بڵاوکراوەتەوە؟</h2>
            <p>{student?.publish ? "بەڵێ" : "نەخێر"}</p>
          </div>
        </div>
      </div>
    </div>
    </AuthLayout>
  );
};

export default ReadPage;
