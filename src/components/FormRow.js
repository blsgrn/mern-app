import React from "react";

function FormRow({ type, placeholder, name, value, onChange, faIcon }) {
  return (
    //from tailwind alert
    <div className="inline-flex bg-gray-100 rounded border border-gray-200 mt-5">
      <div className="inline bg-gray-200 py-2 px-4 text-gray-600">{faIcon}</div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        className="bg-green-50 sm:w-40 border-transparent py-1 text-gray-600 px-4 focus:outline-none"
        onChange={onChange}
      />
    </div>
  );
}

export default FormRow;
//exported to index.js
