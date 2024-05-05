import React from "react";
import AuthLayout from "../../../components/AuthLayout";
import Head from "next/head";
import DashCmp from "../../../components/DashCmp";
import AllCourses from "../../../components/courses/AllCourses";

const CoursesPage = () => {
  return (
    <AuthLayout>
      <Head>
        <title>خولەکانی راڤە</title>
      </Head>
      <DashCmp>
        <AllCourses />
      </DashCmp>
    </AuthLayout>
  );
};

export default CoursesPage;
