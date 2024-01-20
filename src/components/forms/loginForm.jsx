import React from "react";
import { useFormik } from "formik";
import LoginSchema from "../schemas/loginSchema";
import Input from "../common/input";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log("Form Submitted");
    },
  });

  const { handleSubmit, touched, values, handleChange, handleBlur, errors } =
    formik;

  return (
    <div className="container" style={{ width: 350 }}>
      <form
        className="row g-3 "
        style={{ tableLayout: "fixed" }}
        onSubmit={handleSubmit}
      >
        <Input
          id="username"
          value={values.username}
          onChange={handleChange}
          name="Username"
          error={errors.username}
          onBlur={handleBlur}
          onTouch={touched.username}
        />
        <Input
          id="password"
          value={values.password}
          onChange={handleChange}
          name="Password"
          error={errors.password}
          onBlur={handleBlur}
          onTouch={touched.password}
        />
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: 30 }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
