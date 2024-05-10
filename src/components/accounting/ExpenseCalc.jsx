import React, { useEffect, useState } from "react";
import Button from "../Button";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/router";

const ExpenseCalc = ({ income, item }) => {
  const incomeId = income.id;
  const incomeAmount = income.amount;
  const courseId = income.course.id;
  const studentId = income.student;
  const teacherId = item.id;
  const [share, setShare] = useState(null);

  const router = useRouter();

  const shareFetcher = async () => {
    const { data, error } = await supabase
      .from("share")
      .select()
      .eq("course", courseId)
      .eq("teacher", teacherId)
      .single();
    if (error) {
      console.log(error);
    }
    setShare(data);
  };

  useEffect(() => {
    shareFetcher();
  }, [income]);

  const handleExpense = async () => {
    const percentage = Number(share.percentage) / 100;
    const amount = Number(income.amount) * percentage;
    const { data, error } = await supabase.from("expense").insert({
      amount,
      expense_type: "course",
      course: courseId,
      teacher: item.id,
      student: studentId.id,
    });
    if (error) {
      console.log(error);
    } else {
      const existingShares = income.spent_shares || []; // Handle case where spent_shares is null or undefined
      const updatedShares = [...existingShares, item.id];
      const { error } = await supabase
        .from("income")
        .update({ spent_shares: updatedShares })
        .eq("id", income.id);
      if (error) {
        console.log(error);
      }
      router.push("../../");
    }
  };

  return (
    <div dir="rtl" className="flex flex-row justify-between my-6 w-full">
      <Button
        text={`خەرجکردنی پشکی ${item.name}`}
        handleClick={handleExpense}
      />
    </div>
  );
};

export default ExpenseCalc;
