"use client";

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { base_url } from "@/base_url";

const SigninPage = () => {
  const [isHiddenDivVisible, setIsHiddenDivVisible] = useState(false);
  const [isPasswordResetVisible, setIsPasswordResetVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [inputs, setInputs] = useState({
    mail: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
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

      const response = await fetch(`${base_url}/api/auth/login`, requestOptions);
      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("token", result.token);
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
    if (!isHiddenDivVisible) {
      setIsPasswordResetVisible(false);
    }
  };

  const handleForgotPassword = async () => {
    setMessage(""); // Clear previous messages

    try {
      const response = await fetch(`${base_url}/api/auth/request-password-reset`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail: forgotPasswordEmail }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("OTP sent to your email.");
        setIsPasswordResetVisible(true);
      } else {
        setMessage(result.message || "Failed to send OTP. Please check your email.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  const handlePasswordReset = async () => {
    setMessage(""); // Clear previous messages

    try {
      const response = await fetch(`${base_url}/api/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail: forgotPasswordEmail, otp, newPassword }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Password has been reset successfully.");
        setIsHiddenDivVisible(false);
        setIsPasswordResetVisible(false);
      } else {
        setMessage(result.message || "Failed to reset password. Please try again.");
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div
              onClick={toggleHiddenDiv}
              className="absolute top-4 right-4 cursor-pointer text-white"
            >
              <RxCross2 size={24} />
            </div>
            <div className="relative bg-white rounded-3xl p-8 shadow-lg w-80 md:w-96">
              {!isPasswordResetVisible ? (
                <>
                  <input
                    type="email"
                    className="w-full p-2 border rounded-full mt-4"
                    placeholder="Enter your email"
                    value={forgotPasswordEmail}
                    onChange={(e) => setForgotPasswordEmail(e.target.value)}
                  />
                  <button
                    onClick={handleForgotPassword}
                    type="button"
                    className="w-full mt-5 text-white bg-gray-800 hover:bg-gray-900 rounded-full py-2"
                  >
                    Continue
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="email"
                    className="w-full p-2 border rounded-full mt-4"
                    placeholder="Enter your email"
                    value={forgotPasswordEmail}
                    readOnly
                  />
                  <input
                    type="text"
                    className="w-full p-2 border rounded-full mt-4"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <input
                    type="password"
                    className="w-full p-2 border rounded-full mt-4"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <button
                    onClick={handlePasswordReset}
                    type="button"
                    className="w-full mt-5 text-white bg-gray-800 hover:bg-gray-900 rounded-full py-2"
                  >
                    Set Password
                  </button>
                </>
              )}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-700 text-center">
                {message}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row h-screen w-screen">
        <div className="md:w-2/5 w-full h-full flex items-center justify-center p-4">
          <div className="max-w-md w-full">
            <div className="text-center text-3xl mb-3">
              LuxuryHotelConcierge
            </div>
            <div className="text-center text-gray-400 text-md">
              Discover the epitome of luxury and comfort at our world-renowned hotels.
            </div>
            <div className="text-center text-3xl my-5">
              Sign In
            </div>
            <div className="mx-4 md:mx-10">
              <div className="mb-4">
                <input
                  name="mail"
                  onChange={handleChange}
                  type="mail"
                  className="w-full p-2 border rounded-full"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  className="w-full p-2 border rounded-full"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <button
              onClick={handleClick}
              type="button"
              className="w-full text-white bg-gray-800 hover:bg-gray-900 rounded-full py-2 mt-2"
            >
              Continue
            </button>
            <div
              onClick={toggleHiddenDiv}
              className="text-gray-700 text-sm mb-2 text-center mt-4 cursor-pointer"
            >
              Forgot password?
            </div>
            <div className="relative flex py-2 items-center mx-4">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">or</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="text-gray-700 text-sm text-center mb-2">
              Sign in with
            </div>
            <button
              type="button"
              className="w-full text-white bg-gray-800 hover:bg-gray-900 rounded-full py-2 mb-2"
            >
              Google
            </button>
            <Link href="/signup">
              <div className="text-gray-700 text-sm text-center mb-2">
                Don't have an account? Sign Up
              </div>
            </Link>
          </div>
        </div>
        <img className="hidden md:block object-cover w-full md:w-3/5 h-full" src="/sign.png" alt="Signin Background" />
      </div>
    </>
  );
};

export default SigninPage;
