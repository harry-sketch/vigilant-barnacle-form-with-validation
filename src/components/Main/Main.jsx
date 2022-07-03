import React, { useState } from "react";

// Components
import BasicInput from "../BasicInput/BasicInput";

const Main = () => {
  const [formValues, setFormValues] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
  });
  const [messages, setMessages] = useState({});

  //Funs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(messages);
    setMessages(handleError(formValues));
    setFormValues({ first: "", last: "", email: "", password: "" });
  };

  const handleError = (values) => {
    const errorMessage = {};
    const emailRegex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
    if (!values.first) {
      errorMessage["first"] = "*first name is required*";
    }
    if (!values.last) {
      errorMessage["last"] = "*last name is required*";
    }
    if (!values.email) {
      errorMessage["email"] = "*email is required*";
    } else if (!emailRegex.test(values.email)) {
      errorMessage["email"] = "*email is not valid*";
    }
    if (!values.password) {
      errorMessage["password"] = "*password is required*";
    }
    return errorMessage;
  };
  return (
    <div className="rounded-lg w-1/3 bg-[#2C2B69] h-3/4">
      <div className="text-white text-2xl font-bold border-b-2 bg-[#262157] rounded-tl-lg rounded-tr-lg py-4 text-center border-[#262157]">
        Registration Form
      </div>
      <form className="py-8 px-4" onSubmit={(e) => handleSubmit(e)}>
        <BasicInput
          value={formValues.first}
          placeholder="first name"
          name="first"
          message={messages.first}
          onChange={(e) => handleChange(e)}
        />
        <BasicInput
          value={formValues.last}
          placeholder="last name"
          name="last"
          message={messages.last}
          onChange={(e) => handleChange(e)}
        />
        <BasicInput
          value={formValues.email}
          placeholder="email"
          name="email"
          message={messages.email}
          onChange={(e) => handleChange(e)}
        />
        <BasicInput
          value={formValues.password}
          placeholder="password"
          name="password"
          message={messages.password}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          className="bg-[#60B12D] px-6 py-3 text-white rounded-lg border-none outline-none cursor-pointer float-right"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Main;
