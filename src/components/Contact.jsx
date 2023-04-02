import React from "react";
import { Form } from "react-bootstrap";

export const Contact = () => {
  return (
    <>
      <div className="container">
        <Form className="">
          <div className="global-header">
            <h1>Contact Me</h1>
          </div>
          <label htmlFor="">Full Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="email" />
          <label htmlFor="">Your Message</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>{" "}
        </Form>
      </div>
    </>
  );
};
