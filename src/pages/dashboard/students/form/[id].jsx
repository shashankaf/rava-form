import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabase";
import FormPDF from "../../../../components/FormPDF";
import AuthLayout from "../../../../components/AuthLayout";

const PDFView = () => {
  const router = useRouter();
  const [student, setStudent] = useState(null);
  const [teacherIds, setTeacherIds] = useState([]);
  const [teachers, setTeachers] = useState([]);
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
      setTeacherIds(student.teacher);
    } catch (error) {
      console.log(error.message);
    }
  };
  const teacherFetcher = async () => {
    try {
      const { data, error } = await supabase
        .from("teacher")
        .select()
        .in("id", teacherIds);
      if (error) throw Error;
      setTeachers(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    teacherFetcher();
  }, [teacherIds]);

  useEffect(() => {
    fetcher();
  }, [id]);
  if (!student) {
    return <div></div>;
  }
  return (
    <AuthLayout>
      <FormPDF student={student} teachers={teachers} />
    </AuthLayout>
  );
};

export default PDFView;
