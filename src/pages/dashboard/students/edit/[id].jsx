import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabase";
import FormPDF from "../../../../components/FormPDF";

const PDFView = () => {
  const router = useRouter();
  const [student, setStudent] = useState(null);
  const [teacherIds, setTeacherIds] = useState([])
  const [teachers, setTeachers] = useState([])
  const { id } = router.query;

  const fetcher = async () => {
    try {
      let { data: studentData, error } = await supabase
        .from("student")
        .select(`*, class(*), blood(*), travel(*), ragaz(*), cohort(*)`)
        .eq("id", id)
        .single();
      if (error) {
        throw error;
      }
      setStudent(studentData);
      setTeacherIds(student.teacher)
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (id) {
      fetcher();
    }
  }, [id]);

  const teacherFetcher = async() => {
    try {
      const {data, error} = await supabase.from('teacher').select().in('id', teacherIds)
      if(error) throw Error;
      setTeachers(data)
    } catch(e) {
      console.log(e)
    }
  }
  console.log(teachers)
  useEffect(() => {
    teacherFetcher()
  }, [teacherIds])
  if(!student) {
    return <p>Loading...</p>
  }
  return <>
    <FormPDF student={student} teachers={teachers} />
  </>;
};

export default PDFView;
