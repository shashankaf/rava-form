
import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/router";
import Navbar from "./Navbar";

const AuthLayout = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true); // Added loading state
  const [user, setUser] = useState(null);

  const fetcher = async () => {
    const { data: { user }} = await supabase.auth.getUser();
    setUser(user);
    setLoading(false); // Set loading to false when user data is fetched
  };

  useEffect(() => {
    fetcher();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && !loading && !user) {
      router.push("/login");
    }
  }, [loading, user]);

  if (loading) {
    return <div dir="rtl"><Navbar><div className="flex justify-center items-center"><p className="m-10 text-2xl">چاوەڕوانکە...</p></div></Navbar></div>;
  }

  return <>{children}</>;
};

export default AuthLayout;

