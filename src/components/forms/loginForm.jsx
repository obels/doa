import React from "react";
import { Formik, Form } from "formik";
import LoginSchema from "../schemas/loginSchema";
import Input from "../common/input";

const LoginForm = () => {
  return (
    <div className="container" style={{ width: 350 }}>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          setTimeout(() => {
            console.log("Form Submitted");
          });
        }}
      >
        <Form className="row g-3 " style={{ tableLayout: "fixed" }}>
          <Input name="username" label="Username" />
          <Input name="password" label="Password" />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: 30 }}
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
