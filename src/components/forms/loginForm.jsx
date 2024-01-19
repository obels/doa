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

  console.log(formik.touched);

  return (
    <div className="container" style={{ width: 350 }}>
      <form
        className="row g-3 "
        style={{ tableLayout: "fixed" }}
        onSubmit={formik.handleSubmit}
      >
        <Input
          id="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          name="Username"
          error={formik.errors.username}
          onBlur={formik.handleBlur}
          touched={formik.touched.username}
        />
        <Input
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          name="Password"
          error={formik.errors.password}
          onBlur={formik.handleBlur}
          touched={formik.touched.password}
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
