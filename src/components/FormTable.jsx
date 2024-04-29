import React from "react";

const FormTable = ({student, teachers}) => {
  return (
    <>
      <table  className="table-auto border border-collapse border-gray-400 my-4 m-auto">
        <tbody>
          <tr  className="bg-white text-right">
            <td  className="border px-4 py-2">{student?.class?.title}</td>
            <td  className="border px-4 py-2">پۆل</td>
            <td  className="border px-4 py-2">{student?.name}</td>
            <td  className="border px-4 py-2">ناوی بەشداربوو</td>
          </tr>
          <tr className="bg-white text-right">
            <td  className="border px-4 py-2">{student?.ragaz?.title}</td>
            <td  className="border px-4 py-2">رەگەز</td>
            <td  className="border px-4 py-2">{student?.school}</td>
            <td  className="border px-4 py-2">خوێندنگە</td>
          </tr>
          <tr className="bg-white text-right">
            <td  className="border px-4 py-2">{student?.phone}</td>
            <td  className="border px-4 py-2">ژمارەی تەلەفۆن</td>
            <td  className="border px-4 py-2">{student?.blood?.title}</td>
            <td  className="border px-4 py-2">گروپی خوێن</td>
          </tr>
          <tr className="bg-white text-right">
            <td c lassName="border px-4 py-2">{student?.travel?.title}</td>
            <td  className="border px-4 py-2">هاتووچۆ</td>
            <td  className="border px-4 py-2">{student?.address}</td>
            <td  className="border px-4 py-2">ناونیشان</td>
          </tr>
          <tr className="bg-white text-right">
            <td  className="border px-4 py-2">{student.second_pay}</td>
            <td  className="border px-4 py-2">بڕی واسڵکراو \ ٢</td>
            <td  className="border px-4 py-2">{student?.first_pay}</td>
            <td  className="border px-4 py-2">بڕی واسڵکراو \ ١</td>
          </tr>
          <tr className="bg-white text-right">
            <td className="border px-4 py-2">{teachers?.map((teacher) => (
                <li key={teacher?.id}>
                  <p >{teacher?.name} - {teacher?.specialty}</p>
                </li>
              ))}</td>
            <td  className="border px-4 py-2">مامۆستای خوازراو</td>
            <td  className="border px-4 py-2">{student?.health}</td>
            <td  className="border px-4 py-2">باری تەندروستی</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FormTable;
