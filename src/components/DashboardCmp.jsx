import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Title from "./Title";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { studentsAtom } from "../lib/store";
import Filtering from "./Filtering";
import Heading from "./Heading";
import { redirect } from "next/dist/server/api-utils";

const DashboardCmp = () => {
  const [students, setStudents] = useAtom(studentsAtom);
  const [text, setText] = useState("");
  const [errMsg, setErrMsg] = useState("")

  const handleForm = (studentId) => {
    router.push(`/dashboard/form/${studentId}`);
    console.log(studentId);
  };

  const handleSearch = () => {
    if (text.length === 0) {
      fetcher();
    }
    const filtered = students.filter(
      (item) =>
        item.name.includes(text) ||
        item.school.includes(text) ||
        item.address.includes(text) ||
        item.health.includes(text) ||
        item.phone.includes(text),
    );
    setStudents(filtered);
  };

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

  const router = useRouter();

  const handleClick = (studentId) => {
    router.push(`/dashboard/read/${studentId}`);
  };

  const handleEdit = (studentId) => {
    router.push(`/dashboard/edit/${studentId}`);
  };

  useEffect(() => {
    fetcher();
  }, []);

  const [isDeleted, setIsDeleted] = useState(false); // State to track deletion completion

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("student").delete().eq("id", id);

      if (error) {
        throw error;
      }
      setIsDeleted(true); // Set state to indicate deletion is done
    } catch (error) {
      console.error("Error deleting student:", error.message);
    }
  };

  useEffect(() => {
    if (isDeleted) {
      setIsDeleted(false); // Reset state
      window.location.reload(); // Refresh the page
    }
  }, [isDeleted]);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if(error) {
      setErrMsg("ببورە هەڵەیەک روویداوە")
      console.log(error)
    }
    redirect("https//rava.neltify.app")
  };

  return (
    <>
      <div className="flex justify-center">
        {errMsg}
        <button
          type="submit"
          onClick={signOut}
          className="text-white bg-indigo-600 hover:bg-indigo-900 transition-400
                             rounded-lg px-5 py-2.5 text-center"
        >
          چوونە دەرەوە لە ئەکاونت
        </button>
      </div>
      <Title text="لیستی خوێندکارانی پەیمانگای راڤە" />
      <div className="flex justify-center items-center">
        <button onClick={handleSearch} className="text-3xl">
          🔍
        </button>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border-2 border-gray-300 rounded-md px-4 py-2 m-2 outline-none focus:border-indigo-400 focus:border-2 text-right"
          placeholder="گەڕان بەدوای خوێندکاردا"
        />
        <Heading text="گەڕان" />
      </div>
      <div className="flex justify-center items-center">
        <Filtering />
        <Heading text="فلتەرکردن" />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-right">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                فۆرم
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                سڕینەوە
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                نوێکردنەوە
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                بینین
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                مامۆستایانی خوازراو{" "}
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                تەلەفۆن
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                خوێندنگە
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
                <td
                  onClick={() => handleForm(student.id)}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer hover:bg-gray-200 transition-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth={0}
                    className="w-10 h-10 m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M3.5 8H3V7h.5a.5.5 0 010 1zM7 10V7h.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H7z"
                    />
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM3.5 6H2v5h1V9h.5a1.5 1.5 0 100-3zm4 0H6v5h1.5A1.5 1.5 0 009 9.5v-2A1.5 1.5 0 007.5 6zm2.5 5V6h3v1h-2v1h1v1h-1v2h-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
                <td
                  onClick={() => handleDelete(student.id)}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer hover:bg-gray-200 transition-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 m-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </td>
                <td
                  onClick={() => handleEdit(student.id)}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 m-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </td>
                <td
                  onClick={() => handleClick(student.id)}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer hover:bg-gray-200 transition-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 m-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student?.teachers?.map(
                    (item) => `\[${item.name} - ${item.profession}]\ `,
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student.phone}
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

export default DashboardCmp;
