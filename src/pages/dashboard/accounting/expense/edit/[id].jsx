import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../../../../lib/supabase";
import InputCmp from "../../../../../components/InputCmp";
import DashCmp from "../../../../../components/DashCmp";
import Title from "../../../../../components/Title";
import AuthLayout from "../../../../../components/AuthLayout";
import SelectSecond from "../../../../../components/SelectSecond";
import SelectComponent from "../../../../../components/SelectComponent";
import SelectSimple from "../../../../../components/SimpleSelect";

const EditExpense = () => {
  const router = useRouter();
  const { id } = router.query;
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [student, setStudent] = useState("");
  const [course, setCourse] = useState("");
  const [teacher, setTeacher] = useState("");
  const [item, setItem] = useState("");
  const [type, setType] = useState("course");
  const types = ["course", "others"];

  const fetcher = async () => {
    try {
      const { data, error } = await supabase
        .from("expense")
        .select(`*, student(*), course(*), teacher(*), items(*)`)
        .eq("id", id)
        .single();
      if (error) throw Error;
      setExpense(data);
      setAmount(data.amount || "");
      setStudent(data?.student?.id || "");
      setCourse(data?.course?.id || "");
      setTeacher(data?.teacher?.id || "");
      setItem(data?.items?.id || "");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetcher();
  }, [id]);

  const updateExpense = async () => {
    try {
      const { error } = await supabase
        .from("expense")
        .update({
          amount,
          student,
          teacher,
          course,
          items: item,
          expense_type: type
        })
        .eq("id", id);
      if (error) {
        console.log(error)
      }
      router.push("../../");
    } catch (e) {
      console.log(e);
    }
  };

  const [students, setStudents] = useState([]);

  const studentFetcher = async () => {
    try {
      const { data, error } = await supabase.from("student").select();
      if (error) {
        console.log(error);
      }
      setStudents(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    studentFetcher();
  }, []);

  const [teachers, setTeachers] = useState([]);

  const teacherFetcher = async () => {
    try {
      const { data, error } = await supabase.from("teacher").select();
      if (error) {
        console.log(error);
      }
      setTeachers(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    teacherFetcher();
  }, []);

  const [courses, setCourses] = useState([]);

  const courseFetcher = async () => {
    try {
      const { data, error } = await supabase.from("course").select();
      if (error) {
        console.log(error);
      }
      setCourses(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    courseFetcher();
  }, []);

  const [items, setItems] = useState([]);

  const itemFetcher = async () => {
    try {
      const { data, error } = await supabase.from("items").select();
      if (error) {
        console.log(error);
      }
      setItems(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    itemFetcher();
  }, []);

  if (expense === null) {
    return <p>...</p>;
  }
  return (
    <AuthLayout>
      <DashCmp>
        <Title text="نوێکردنەوەی خەرجی" />
        <InputCmp label="بڕی خەرجی" state={amount} setState={setAmount} />
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
        <SelectSecond
          label="مامۆستا"
          values={teachers}
          item={teacher}
          setItem={setTeacher}
        />
        <SelectComponent
          label="شمەک"
          values={items}
          item={item}
          setItem={setItem}
        />
        <SelectSimple
          label="جۆری خەرجی"
          values={types}
          item={type}
          setItem={setType}
        />
        <div className="mb-4">
          <button
            onClick={updateExpense}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
          >
            نوێکردنەوە
          </button>
        </div>
      </DashCmp>
    </AuthLayout>
  );
};

export default EditExpense;
