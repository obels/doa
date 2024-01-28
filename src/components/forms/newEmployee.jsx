import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import UserSchema from "../schemas/directorySchema";
import Input from "../common/input";

const NewEmployee = () => {
  let userInfo = {};
  let completed = false;

  useEffect(() => {
    console.log("reset");
  }, [completed]);

  return (
    <div
      className="container"
      style={{ width: 400, height: 700, backgroundColor: "lightgray" }}
    >
      <h5 style={{ textAlign: "center" }}>New Employee Form</h5>
      <div>
        <Formik
          initialValues={{
            name: "",
            phone: "",
            email: "",
            id: "",
            active: "",
          }}
          validationSchema={UserSchema}
          onSubmit={(values) => {
            setTimeout(() => {
              userInfo = values;
              console.log("New User Created");
              completed = true;
              console.log(userInfo);
            }, 400);
          }}
        >
          <Form>
            <div style={{ width: 250, height: 500 }}>
              <div>{completed && <h5>New User Created</h5>}</div>
              <Input name="name" label="Full Name" />
              <Input name="phone" label="Phone Number" />
              <Input name="email" label="Email" />
              <Input name="id" label="Employee Number" />
              <div style={{ marginTop: 20 }}>
                <label>Employee Status: </label>
                <select name="active">
                  <option value=""></option>
                  <option value="true">Active</option>
                  <option value="false">NotActive</option>
                </select>
              </div>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default NewEmployee;
