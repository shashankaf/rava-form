import React from "react";
import localFont from "@next/font/local"

const rudaw = localFont({src: "../lib/rudawbold.woff"})
const FormTable = ({student, teachers}) => {
  return (
    <>
      <table  className="table-auto border border-collapse border-gray-400 my-4 m-auto">
        <tbody>
          <tr  className="bg-white text-right">
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">{student.class?.title}</td>
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">پۆل</td>
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">{student.name}</td>
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">ناوی بەشداربوو</td>
          </tr>
          <tr className="bg-white text-right">
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">{student.ragaz?.title}</td>
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">رەگەز</td>
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">{student.school}</td>
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">خوێندنگە</td>
          </tr>
          <tr className="bg-white text-right">
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">{student.phone}</td>
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">ژمارەی تەلەفۆن</td>
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">{student.blood?.title}</td>
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">گروپی خوێن</td>
          </tr>
          <tr className="bg-white text-right">
            <td cstyle={{fontFamily: 'rudaw'}} lassName="border px-4 py-2">{student.travel?.title}</td>
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">هاتووچۆ</td>
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">{student.address}</td>
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">ناونیشان</td>
          </tr>
          <tr className="bg-white text-right">
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">{student.second_pay}</td>
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">بڕی واسڵکراو \ ٢</td>
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">{student.first_pay}</td>
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">بڕی واسڵکراو \ ١</td>
          </tr>
          <tr className="bg-white text-right">
            <td className="border px-4 py-2">{teachers?.map((teacher) => (
                <li key={teacher?.id}>
                  <p style={{fontFamily: 'rudaw'}}>{teacher?.name} - {teacher?.specialty}</p>
                </li>
              ))}</td>
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">مامۆستای خوازراو</td>
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">{student.health}</td>
            <td style={{fontFamily: 'rudaw'}} className="border px-4 py-2">باری تەندروستی</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FormTable;
