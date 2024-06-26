"use client";

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SigninPage = () => {
  const [isHiddenDivVisible, setIsHiddenDivVisible] = useState(false);
  const [message,setMessage] = useState("");
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [inputs, setInputs] = useState({
    mail: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputs);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(inputs);

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify(inputs);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch("http://localhost:4000/api/auth/login", requestOptions);
      const result = await response.json();
      console.log(result)

      if (response.ok) {
        localStorage.setItem("token", result.token);
        // console.log(result);
        router.push("/");
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHiddenDiv = () => {
    setIsHiddenDivVisible(!isHiddenDivVisible);
  };


  const handleForgotPassword = async () => {
    setMessage(""); // Clear previous messages

    try {
      const response = await fetch("http://localhost:4000/api/auth/request-password-reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail: forgotPasswordEmail }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("OTP sent to your email.");
      } else {
        setMessage(result.message || "Failed to send OTP. Please check your email.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };



  return (
    <>
      <div className="m-auto">
        {isHiddenDivVisible && (
          <div className="m-auto">
            <div
              onClick={toggleHiddenDiv}
              className="m-auto absolute w-[4rem] h-[4rem] mt-[7rem] ml-[11.5rem] md:w-[4rem] md:h-[4rem] bg-white rounded-full md:mt-[7rem] md:ml-[48rem] p-6 "
            >
              <div className="h-[2rem] w-[2rem]">
                <RxCross2 />
              </div>
            </div>
            <div className=" absolute h-[11rem] w-[23rem] mt-[14rem] ml-[2.5rem]  md:h-[13rem] md:w-[30rem] rounded-3xl bg-white md:ml-[35rem] md:mt-[15rem] border-2 border-black">
              <input
                type="text"
                id="input-group-1"
                className=" m-auto mt-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[20rem] md:w-[25rem] ps-10 p-2.5 "
                placeholder="Enter your email"
                value={forgotPasswordEmail}
                onChange={(e) => setForgotPasswordEmail(e.target.value)}
              />
              {/* <input
                type="text"
                id="input-group-1"
                className=" m-auto mt-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[20rem] md:w-[25rem] ps-10 p-2.5 "
                placeholder="Enter your password"
              /> */}
              <button
                onClick={handleForgotPassword}
                type="button"
                className="mt-5 text-white w-[20rem] md:w-[25rem] ml-5 md:ml-10 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Conti
              </button>
            </div>
            <div className="absolute bg-white rounded-3xl h-[3rem] w-[15rem] ml-[80rem] mt-[5rem] pl-7 pt-3">
              Reset link to your email.{" "}
            </div>
          </div>
        )}
      </div>
      <div className="flex h-screen w-screen ">
        <div className="md:w-2/5 w-full  h-screen flex items-center justify-center mx-[2rem] ">
          <div>
            <div className="text-center text-3xl mb-3">
              LuxuryHotelConcierge
            </div>
            <div className="text-center text-gray-400 text-md ">
              Discover the epitome of luxury and comfort at our world-renowned
              hotels..
            </div>
            <div className="text-center text-3xl my-5 md:mr-[4rem]">
              Sign In
            </div>
            <div className="mx-[5rem] md:mx-10">
              <div className=" mb-4 justify-center items-center">
                <input
                  name="mail"
                  onChange={handleChange}
                  type="mail"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[18rem] md:w-[25rem] ps-10 p-2.5 "
                  placeholder="Enter your email"
                />
              </div>
              <div className=" mb-4 justify-center items-center">
                <input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[18rem] md:w-[25rem] ps-10 p-2.5 "
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              onClick={handleClick}
              type="button"
              className="text-white w-[18rem] md:w-[25rem] ml-[5rem] md:ml-10 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Continue
            </button>
            <div
              onClick={toggleHiddenDiv}
              className="text-gray-700 text-sm mb-2 ml-[11.2rem] cursor-pointer"
            >
              Forgot password?
            </div>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">or</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="text-gray-700 text-sm mb-2 ml-[12rem] md:ml-[12.8rem]">
              Signin with
            </div>
            <button
              type="button"
              className="text-white w-[18rem] md:w-[25rem] ml-[5rem] md:ml-10 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Google
            </button>
            <Link href="/signup">
              {" "}
              <div className="text-gray-700 text-sm mb-2 ml-[7rem] md:ml-[9rem]">
                Don't have an account ? Sign Up
              </div>
            </Link>
          </div>
        </div>

        <img className="object-fill w-0 md:w-3/5 " src="/sign.png" />
      </div>
    </>
  );
};

export default SigninPage;
