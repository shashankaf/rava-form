import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "../lib/supabase";
import localFont from "next/font/local";
import { useRouter } from "next/router";

const shasenem = localFont({ src: "../pages/fonts/shasenem.ttf" });

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  async function signInWithEmail(e) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setErrorMsg(error.message);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <section
      style={{ fontFamily: shasenem.className }}
      className="bg-gray-50 py-10 text-right"
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <p>{errorMsg}</p>
        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <Image
            className="mr-2"
            src="/rava.png"
            alt="logo"
            width={100}
            height={100}
          />
          Rava Institute
        </Link>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              بچۆ ناو ئەکاونتەکەتەوە{" "}
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={signInWithEmail}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  ئیمەیل{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 
                             sm:text-sm rounded-lg focus:ring-primary-600 
                             focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  وشەی نهێنی
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 
                             text-gray-900 sm:text-sm rounded-lg 
                             focus:ring-primary-600 focus:border-primary-600 
                             block w-full p-2.5"
                  required
                />
                <button
                  type="submit"
                  className="w-full text-white bg-indigo-600 
                             rounded-lg px-5 py-2.5 text-center mt-8"
                >
                  چوونە ژوورەوە
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
