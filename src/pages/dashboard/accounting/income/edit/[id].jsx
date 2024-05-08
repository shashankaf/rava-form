import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { supabase } from "../../../../../lib/supabase";
import InputCmp from "../../../../../components/InputCmp";
import DashCmp from "../../../../../components/DashCmp";
import Title from "../../../../../components/Title";
import AuthLayout from "../../../../../components/AuthLayout";
import SelectSecond from "../../../../../components/SelectSecond";
import SelectComponent from "../../../../../components/SelectComponent";

const EditIncome = () => {
  const router = useRouter();
  const { id } = router.query;
  const [income, setIncome] = useState("");
  const [amount, setAmount] = useState("");
  const [student, setStudent] = useState("");
  const [course, setCourse] = useState("");

  const fetcher = async () => {
    try {
      const { data, error } = await supabase
        .from("income")
        .select(`*, student(*), course(*)`)
        .eq("id", id)
        .single();
      if (error) throw Error;
      setIncome(data);
      setAmount(data.amount || "");
      setStudent(data.student.id || "");
      setCourse(data.course.id || "");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetcher();
  }, [id]);

  const updateIncome = async () => {
    try {
      const { data, error } = await supabase
        .from("income")
        .update({
          amount,
          student,
          course,
        })
        .eq("id", id);
      if (error) throw Error;
      console.log(data);
      router.push("../");
    } catch (e) {
      console.log(e);
    }
  };

  const [students, setStudents] = useState([])

  const studentFetcher = async() => {
    try {
      const {data, error} = await supabase.from("student").select()
      if(error) {
        console.log(error)
      }
      setStudents(data)
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    studentFetcher()
  }, [])

  const [courses, setCourses] = useState([])

  const courseFetcher = async() => {
    try {
      const {data, error} = await supabase.from("course").select()
      if(error) {
        console.log(error)
      }
      setCourses(data)
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    courseFetcher()
  }, [])

  if (income === null) {
    return <p>...</p>;
  }
  return (
    <AuthLayout>
      <DashCmp>
        <Title text="نوێکردنەوەی داهات" />
        <InputCmp label="بڕی داهات" state={amount} setState={setAmount} />
        <SelectSecond 
          label="خوێندکار"
          values={students}
          item={student}
          setItem={setStudent}
        />
        <SelectComponent 
          label="خول"
          values={courses}
          item={course}
          setItem={setCourse}
        />
        <div className="mb-4">
          <button
            onClick={updateIncome}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
          >
            نوێکردنەوە
          </button>
        </div>
      </DashCmp>
    </AuthLayout>
  );
};

export default EditIncome;
