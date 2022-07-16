import React from "react";
import { MdEmail } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import Logo from "../components/Logo";

function Register() {
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden bg-brown-50">
      <form className="container rounded-lg shadow-md max-w-md flex flex-col justify-center items-center bg-green-200 p-20 md:p-10 sm:p-5">
        <div className="p-5">
          <Logo />
        </div>
        <div>
          <h1 className="text-purple-700 text-3xl"> Login</h1>
        </div>
        <div className="inline-flex bg-gray-100 rounded border border-gray-200 mt-10">
          <div className="inline bg-gray-200 py-2 px-4 text-gray-600">
            <MdEmail size={28} color={"grey"} />
          </div>
          <input
            type="text"
            placeholder="Email"
            value=""
            className="bg-green-50 sm:w-40 border-transparent py-1 text-gray-600 px-4 focus:outline-none"
          />
        </div>
        <div className="inline-flex bg-gray-100 rounded border border-gray-200 mt-5">
          <div className="inline bg-gray-200 py-2 px-4 text-gray-600">
            <FaUnlockAlt size={28} color={"grey"} />
          </div>
          <input
            type="text"
            placeholder="Password"
            value=""
            className="bg-green-50 sm:w-40 border-transparent py-1 text-gray-600 px-4 focus:outline-none"
          />
        </div>
        <div>
          <Checkbox
            className="flex justify-start flex-col items-center"
            defaultChecked
            color="indigo"
            label="Remember me"
          />
          <Button
            size="lg"
            variant="gradient"
            color="amber"
            className="p-6 m-6"
          >
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Register;
