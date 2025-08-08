"use client";
import { registerValidationSchema } from "@/utils/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    const { error, value } = registerValidationSchema.validate({ firstName, surName, email, password });
    if (error) {
      toast.error(error.details[0].message);
      return;
    } else {
      toast.success("Register successful!")
      console.log("value --->", value.password);
      // hash password
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(value.password, salt);
      value.password = hashPassword;


      console.log("hashPassword --->", hashPassword);





      // send to server
      const creatNewUser = async () => {
        try {
          const response = await axios.post("http://localhost:8000/users", value);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      creatNewUser();
      setTimeout(() => {
        setFirstName("");
        setSurName("");
        setEmail("");
        setPassword("");
        router.push("/Login");
      }, 1500);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center h-screen w-[100%] ">
        <div className=" w-[60%] h-[90%] rounded-lg  flex items-center justify-center ">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-200 w-[80%] h-[100%] rounded-lg shadow-lg p-6  "
          >
            <h1 className=" text-black text-2xl font-bold text-center">
              Register Page
            </h1>
            <label className="text-black font-semibold mb-5">FirstName</label>
            <div className="mt-6">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="px-1 py-2 w-[100%] border-2 border-gray-300 rounded-lg hover:bg-gray-100"
                placeholder="Enter your First Name"
              />
            </div>
            <label className="text-black font-semibold mb-5">SurName</label>
            <div className="mt-6">
              <input
                type="text"
                value={surName}
                onChange={(e) => setSurName(e.target.value)}
                className="px-1 py-2 w-[100%] border-2 border-gray-300 rounded-lg hover:bg-gray-100"
                placeholder="Enter your SurName"
              />
            </div>
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
                Register
              </button>
            </div>
            <div className="flex items-center justify-center mt-6">
              <h3>
                Eğer Henüz Üye iseniz{" "}
                <a href="/Login" className="text-blue-600 hover:underline">
                  Giriş Yapın
                </a>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
