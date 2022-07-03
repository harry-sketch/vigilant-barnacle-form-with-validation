import React from "react";

const BasicInput = ({ placeholder, name, message, onChange, value }) => {
  return (
    <div className="mb-4 ">
      <div className="bg-white rounded-lg">
        <input
          value={value}
          type="text"
          name={name}
          placeholder={placeholder}
          className="bg-transparent p-3 w-full outline-none border-none"
          onChange={(e) => onChange(e)}
        />
      </div>
      <span className="mt-2 text-red-500">{message}</span>
    </div>
  );
};

export default BasicInput;
