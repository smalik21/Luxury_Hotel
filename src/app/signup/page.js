"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { base_url } from "@/base_url";
// import Link from 'next/link';

const Page = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const router = useRouter();

  const api = base_url;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null && token !== undefined) {
      router.push("/");
    }
  }, []);

  const generateOTP = async (e) => {
    e.preventDefault();

    if (email == "") {
      alert("plz enter email");
    }

    try {
      const res = await fetch(`${api}/api/auth/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail: email,
        }),
      });

      const message = await res.json();
      console.log("message: ", message);
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred");
    }
  };

  // username, mail, phone, password, accountType, idProof, otp

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwoed and confirm password is not same");
      return;
    }

    const username = firstName + " " + lastName;
    const accountType = "guest";

    try {
      const res = await fetch(`${api}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail: email,
          username,
          password,
          otp,
          accountType,
          phone: "123456789",
        }),
      });

      const result = await res.json();
      setResponseMessage(result.message);

      if (result.token !== null && result.token !== undefined) {
        localStorage.setItem("token", result.token);
        router.push("/");
      }
      // console.log(result);
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred");
    }
  };

  return (
    <>
      <div className="flex h-screen w-screen">
        <div className="md:w-2/5 w-full h-screen flex items-center justify-center mx-[2rem]">
          <div>
            <div className="text-center text-3xl mb-3">
              LuxuryHotelConcierge
            </div>
            <div className="text-center text-gray-400 text-md">
              Discover the epitome of luxury and comfort at our world-renowned
              hotels..
            </div>
            <div className="text-center text-3xl my-5 md:mr-[4rem]">SignUp</div>
            <div className="ml-[5rem] md:mx-10">
              <div className="mb-4 justify-center items-center">
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[18rem] md:w-[25rem] ps-10 p-2.5"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex">
                <div className="mb-4 mr-2">
                  <input
                    type="text"
                    id="firstName"
                    className="ml-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[8.5rem] md:w-[12rem] p-2.5"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="mb-4 mx-2">
                  <input
                    type="text"
                    id="lastName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[8.5rem] md:w-[12rem] p-2.5"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="ml-[5rem] md:mx-10 mb-4">
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[18rem] md:w-[25rem] p-2.5"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="ml-[5rem] md:mx-10 mb-4">
              <input
                type="password"
                id="confirmPassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[18rem] md:w-[25rem] p-2.5"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="ml-[5rem] md:mx-10 mb-4 flex">
              <input
                type="text"
                id="otp"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[12.5rem] md:w-[25rem] p-2.5"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button className="border px-2 rounded-full text-white bg-black ml-2" onClick={generateOTP}>Send OTP</button>
            </div>
            <button
              type="button"
              className="text-white w-[18rem] md:w-[25rem] ml-[5rem] md:ml-10 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              onClick={handleSignup}
            >
              SignUp
            </button>
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">or</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <button
              type="button"
              className="text-white w-[25rem] ml-10 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Google
            </button>
            <Link href="/signin">
              <div className="text-gray-700 text-sm mb-2 ml-[7rem] md:ml-[9rem]">
                Already have an account? Sign In
              </div>
            </Link>
          </div>
        </div>
        <img className="object-fill w-0 md:w-3/5" src="/sign.png" />
      </div>
    </>
  );
};

export default Page;
