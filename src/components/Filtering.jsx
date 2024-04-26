import { useAtom } from "jotai";
import React from "react";
import {
  bloodAtom,
  classAtom,
  ragazAtom,
  studentsAtom,
  travelAtom,
} from "../lib/store";
import Classes from "../components/Classes";
import Blood from "../components/Blood";
import Travel from "../components/Travel";
import Ragaz from "../components/Ragaz";
import Button from "./Button";

const Filtering = () => {
  const [students, setStudents] = useAtom(studentsAtom);
  const [clas] = useAtom(classAtom);
  const [blood] = useAtom(bloodAtom);
  const [travel] = useAtom(travelAtom);
  const [ragaz] = useAtom(ragazAtom);

  const handleClick = () => {
    const filtered_students = students.filter((item) => {
      let condition = true;

      if (clas.id !== null) {
        condition = condition && item.class === clas.id;
      }
      if (blood.id !== null) {
        condition = condition && item.blood === blood.id;
      }
      if (travel.id !== null) {
        condition = condition && item.travel === travel.id;
      }
      if (ragaz.id !== null) {
        condition = condition && item.ragaz === ragaz.id;
      }

      return condition;
    });

    setStudents(filtered_students);
  };

  return (
    <div className="flex justify-center gap-1 flex-wrap">
      <Button text="فلتەرکردن" handleClick={handleClick} />
      <Classes />
      <Blood />
      <Travel />
      <Ragaz />
    </div>
  );
};

export default Filtering;
