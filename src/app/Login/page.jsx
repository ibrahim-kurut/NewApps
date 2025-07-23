"use client";
import { loginValidationSchema } from "@/utils/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    const { error, value } = loginValidationSchema.validate({ email, password });
    if (error) {
      toast.error(error.details[0].message);
      return;
    } else {
      toast.success("Login successful!");
      setEmail("");
      setPassword("");
      console.log(value);
      //! TODO send to server
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center h-screen w-[100%] ">
        <div className=" w-[60%] h-[90%] rounded-lg  flex items-center justify-center ">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-200 w-[80%] h-[80%] rounded-lg shadow-lg p-6  "
          >
            <h1 className=" text-black text-2xl font-bold text-center">
              Login Page
            </h1>
            <label className="text-black font-semibold mb-5">Email</label>
            <div className="mt-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-1 py-2 w-[100%] border-2 border-gray-300 rounded-lg hover:bg-gray-100"
                placeholder="Enter your E mail"
              />
            </div>
            <label className="text-black font-semibold mb-5">Password</label>
            <div className="mt-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-1 py-2 w-[100%] border-2 border-gray-300 rounded-lg hover:bg-gray-100"
                placeholder="Enter your Password"
              />
            </div>
            <div className="flex items-center justify-center mt-6">
              <button className="bg-blue-950 text-white px-1 py-2 w-[80%] rounded-lg hover:bg-blue-900 capitalize">
                Login
              </button>
            </div>
            <div className="flex items-center justify-center mt-6">
              <h3>
                Eger Henuz uye Degilseniz{" "}
                <a href="/Register" className="text-blue-600 hover:underline">
                  Kayit Olun
                </a>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
