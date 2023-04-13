import React from "react";
import { Form } from "react-bootstrap";
import { CustomInputs } from "./CustomInputs";

export const Contact = () => {
  const inputs = [
    {
      label: "Name",
      fname: "Name",
      type: "text",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
    },
    {
      label: "Your Message",
      name: "message",
      type: "text",
    },
  ];
  return (
    <>
      <div className="container ">
        <h1 className="global-header ">Contact Me</h1>

        <Form
          className=" border m-auto mb-4 rounded shadow-lg p-5"
          style={{ width: "500px" }}>
          {inputs.map((item, i) => (
            <CustomInputs key={i} {...item} />
          ))}
        </Form>
      </div>
    </>
  );
};
