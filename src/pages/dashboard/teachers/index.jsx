import React from "react";
import Head from "next/head";
import TableTeachers from "../../../components/TableTeachers";
import AuthLayout from "../../../components/AuthLayout";

const TeachersDashboard = () => {

  return (
    <AuthLayout>
      <Head>
        <title>Rava Teachers Dashboard</title>
        <meta name="description" content="Learner Dashboard - Rava Institute" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TableTeachers />
    </AuthLayout>
  );
};

export default TeachersDashboard
