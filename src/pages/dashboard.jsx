import React, { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import Title from "./components/Title";
import Head from "next/head";

const Dashboard = () => {
  const [students, setStudents] = useState([]);

  const fetcher = async () => {
    try {
      let { data: student, error } = await supabase.from("student").select("*");
      if (error) {
        throw error;
      }
      setStudents(student);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <>
      <Head>
        <title>Rava Registeration Form</title>
        <meta
          name="description"
          content="Learner Dashboard - Rava Institute"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <Title text="لیستی خوێندکارانی پەیمانگای راڤە" />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-right">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                تەندروستی
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                هاتوچۆ
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                مامۆستایانی خوازراو              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                ناونیشان
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                تەلەفۆن
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                گروپی خوێن
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                زانکۆ
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                پۆل
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                ناو
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student.health}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student.travel}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student.teachers.map(item => `\[${item.name} - ${item.profession}]\ `)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student.address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student.blood}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student.school}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student.class}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
