import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../../lib/supabase";

const UpdatePage = () => {
  const router = useRouter();
  const [student, setStudent] = useState(null);
  const [name, setName] = useState("");
  const [classVal, setClass] = useState("");
  const [school, setSchool] = useState("");
  // Add state variables for other fields as needed

  const { id } = router.query;

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
      // Set initial values for input fields
      setName(studentData.name);
      setClass(studentData.class);
      setSchool(studentData.school);
      // Set initial values for other fields
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (id) {
      fetcher();
    }
  }, [id]);

  const handleUpdate = async () => {
    try {
      const { data, error } = await supabase
        .from("student")
        .update({
          name,
          class: classVal,
          school,
          // Update other fields as needed
        })
        .eq("id", id);

      if (error) {
        throw error;
      }
      console.log("Updated student:", data);
      router.push(`/dashboard/read/${id}`); // Redirect to read page after update
    } catch (error) {
      console.error("Error updating student:", error.message);
    }
  };

  if (!student) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or any other loading indicator
  }

  return (
    <div
      className="min-h-screen bg-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full"
            placeholder="ناوی خوێندکار"
          />
          <input
            type="text"
            value={classVal}
            onChange={(e) => setClass(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full"
            placeholder="پۆل"
          />

          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full"
            placeholder="خوێندنگە"
          />
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
