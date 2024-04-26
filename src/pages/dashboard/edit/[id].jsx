import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../../lib/supabase";
import Heading from "../../../components/Heading";
import Title from "../../../components/Title";
import SelectedClass from "../../../components/SelectedClass";
import BloodSelect from "../../../components/BloodSelect";
import TravelSelect from "../../../components/TravelSelect";
import RagazSelect from "../../../components/RagazSelect";

const UpdatePage = () => {
  const router = useRouter();
  const [student, setStudent] = useState(null);
  const { id } = router.query;
  const [published, setPublished] = useState(student?.publish);

  const fetcher = async () => {
    try {
      let { data: studentData, error } = await supabase
        .from("student")
        .select()
        .eq("id", id)
        .single();
      if (error) {
        throw error;
      }
      setStudent(studentData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (id) {
      fetcher();
    }
  }, [id]);

  const handleChange = (e, propertyName) => {
    const value = e.target.value;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [propertyName]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const { data, error } = await supabase
        .from("student")
        .update(student)
        .eq("id", id);

      if (error) {
        throw error;
      }
      router.push(`/dashboard/read/${id}`); // Redirect to read page after update
    } catch (error) {
      console.error("Error updating student:", error.message);
    }
  };

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="min-h-screen bg-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <Title text="نوێکردنەوەی تۆماری فێرخواز" />
        <div className="p-6">
          <div className="flex justify-center">
            <button onClick={() => setPublished(false)} className={`${published !== true ? 'bg-blue-900' : 'bg-gray-400'} text-white px-4 py-2 rounded-r-md`}>
              بڵاونەکراوەتەوە
            </button>
            <button onClick={() => setPublished(true)} className={`${published === true ? 'bg-blue-900' : 'bg-gray-400'} text-white px-4 py-2 rounded-l-md`}>
              بڵاوکراوەتەوە
            </button>
          </div>
          <Heading text="ناو" />
          <input
            type="text"
            value={student.name}
            onChange={(e) => handleChange(e, "name")}
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full"
          />
          <Heading text="پۆل" />
          <SelectedClass student={student} />
          <Heading text="جۆری خوێن" />
          <BloodSelect student={student} />
          <Heading text="جۆری هاتووچۆ" />
          <TravelSelect student={student} />
          <Heading text="جۆری رەگەز" />
          <RagazSelect student={student} />
          <Heading text="خوێندنگە" />
          <input
            type="text"
            value={student.school}
            onChange={(e) => handleChange(e, "school")}
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full"
          />
          <Heading text="ژمارەی تەلەفۆن" />
          <input
            type="text"
            value={student.phone}
            onChange={(e) => handleChange(e, "phone")}
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full"
          />
          <Heading text="ناونیشان" />
          <input
            type="text"
            value={student.address}
            onChange={(e) => handleChange(e, "address")}
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full"
          />
          <Heading text="کێشەی تەندروستی" />
          <input
            type="text"
            value={student.health}
            onChange={(e) => handleChange(e, "health")}
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full"
          />
          <Heading text="بڕی پارەی یەکەم" />
          <input
            type="text"
            value={student.first_pay}
            onChange={(e) => handleChange(e, "first_pay")}
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full"
          />
          <Heading text="بڕی پارەی دووەم" />
          <input
            type="text"
            value={student.second_pay}
            onChange={(e) => handleChange(e, "second_pay")}
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full"
          />{" "}
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold"
          >
            نوێکردنەوە
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
