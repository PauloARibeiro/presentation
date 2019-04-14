import React, { useState } from "react";
import Button from "./Button";

const useUpdateFields = initialValue => {
  const [value, setValue] = useState(initialValue);

  return [value, setValue];
};

const Form = () => {
  // const [name, setName] = useUpdateFields("");
  // const [email, setEmail] = useUpdateFields("");
  // const [phone, setPhone] = useUpdateFields("");
  // const [error, setError] = useUpdateFields("");

  const { values, updateFields } = formData();

  return (
    <form
      className="form-input"
      // onSubmit={e => formValidation(e, name, email, phone)}
    >
      <input
        type="text"
        className="form-input border-radius border-grey-light color-black box-shadow"
        placeholder="Name"
        value={values.name}
        name="Name"
        // onChange={event => setName(event.target.value)}
      />
{/* 
      <input
        type="email"
        className="form-input border-radius border-grey-light color-black box-shadow"
        placeholder="Email"
        value={email}
        name="email"
        onChange={event => setEmail(event.target.value)}
      />

      <input
        type="text"
        className="form-input border-radius border-grey-light color-black box-shadow"
        placeholder="Phone"
        value={phone}
        name="phone"
        onChange={event => setPhone(event.target.value)}
      /> */}

      {/* <h1>{error}</h1> */}

      <div className="button-list flex flex-end">
        <Button data={{ action: "add", cssClass: "background-green" }} />
        <Button data={{ action: "edit", cssClass: "background-yellow" }} />
        <Button data={{ action: "trash", cssClass: "background-red" }} />
      </div>
    </form>
  );
};

const formValidation = (e, name, email, phone) => {
  e.preventDefault();

  if (name === "" || email === "" || phone === "") {
  }
};


const formData = () => {
  const [values, setValues] = useState({});

  const updateFields = event => {
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    values,
    updateFields
  };
};

export default Form;
