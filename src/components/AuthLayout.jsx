
import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/router";

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
    // Only execute router.push on the client side and when loading is false
    if (typeof window !== 'undefined' && !loading && !user) {
      router.push("/login");
    }
  }, [loading, user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default AuthLayout;

