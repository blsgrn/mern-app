import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";
import { Logo, FormRow } from "../components/index";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
function Register() {
  const [values, setValues] = useState(initialState);
  const onChange = (e) => {
    console.log(e.target);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  const faIcon1 = <CgProfile size={28} color={"blue"} />;
  const faIcon2 = <MdEmail size={28} color={"blue"} />;
  const faIcon3 = <FaUnlockAlt size={28} color={"blue"} />;

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden bg-brown-50">
      <form
        onSubmit={onSubmit}
        className=" container rounded-lg shadow-md max-w-md flex flex-col justify-center items-center bg-green-200 p-20 md:p-10 sm:p-5"
      >
        <div className="p-5">
          <Logo />
        </div>
        <div>
          <h1 className="text-purple-700 text-3xl"> Login</h1>
        </div>
        <FormRow
          faIcon={faIcon1}
          type="text"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={onChange}
        />
        <FormRow
          faIcon={faIcon2}
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={onChange}
        />
        <FormRow
          faIcon={faIcon3}
          type="text"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={onChange}
        />

        <div>
          <h1 className="mt-4 text-sm">
            Not A Member Yet?
            <Link to={`/landing`} activeClassName="active">
              <span className="text-purple-800 font-semibold px-2">
                Register
              </span>
            </Link>
          </h1>
        </div>
        <button
          type="submit"
          size="lg"
          variant="gradient"
          color="amber"
          className="btn px-4 py-2 bg-orange-400 rounded-lg shadow-lg mx-6 my-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
