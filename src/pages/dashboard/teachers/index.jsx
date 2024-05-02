import React, { useEffect } from "react";
import Head from "next/head";
import DashCmp from "../../../components/DashCmp";
import TableTeachers from "../../../components/TableTeachers";

const TeachersDashboard = () => {

  return (
    <>
      <Head>
        <title>Rava Teachers Dashboard</title>
        <meta name="description" content="Learner Dashboard - Rava Institute" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TableTeachers />
    </>
  );
};

export default TeachersDashboard
