import React, { useEffect } from "react";
import Head from "next/head";
import DashboardCmp from "../../../components/DashboardCmp";
import Login from "../../../components/Login";
import { useAtom } from "jotai";
import { supabase } from "../../../lib/supabase";
import { sessionAtom } from "../../../lib/store";

const Dashboard = () => {
  const [session, setSession] = useAtom(sessionAtom);

  const fetchSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    if(error) {
      console.log(error)
    }
    console.log(data)
    setSession(data.session);
  };
  useEffect(() => {
    fetchSession();
  }, []);
  return (
    <>
      <Head>
        <title>Rava Registeration Form</title>
        <meta name="description" content="Learner Dashboard - Rava Institute" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session === null ? <Login /> : <DashboardCmp />}
    </>
  );
};

export default Dashboard;
