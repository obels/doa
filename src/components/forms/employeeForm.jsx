import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../common/input";
//import Select from "../common/select";//
import { useFormik } from "formik";
import UserSchema from "../schemas/directorySchema";
import apiClient from "../../services/api-client";
import { number } from "yup";

const EmployeeForm = (props) => {
  const { id } = useParams("");
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("/users")
      .then((response) =>
        setData(response.data.find((f) => f.id.toString() === id))
      )
      .catch((errors) => setError(errors.message));

    setFieldValue("name", data.name);
    setFieldValue("phone", data.phone);
    setFieldValue("email", data.email);
    setFieldValue("id", data.id);
  }, [data.id]);

  const { name, phone, email, id: userId } = data;
  const formik = useFormik({
    initialValues: {
      name: { name },
      phone: { phone },
      email: { email },
      id: { userId },
    },
    validationSchema: UserSchema,
    onSubmit: (values) => {
      const updatedUser = formik.values;
      console.log(updatedUser);

      apiClient
        .patch("/users/" + data.id, { updatedUser })
        .then((response) => console.log(response))
        .catch((errors) => setError(errors.message));

      console.log("Form Submitted");
    },
  });
  const { setFieldValue, handleChange, values, touched, handleBlur, errors } =
    formik;

  console.log(data);
  return (
    <div>
      {error && <div className="text-alert">{error}</div>}
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="name"
          name="Name"
          onChange={handleChange}
          value={values.name || ""}
          touched={touched.name}
          error={errors.name}
          onBlur={handleBlur}
        />
        <Input
          id="phone"
          name="Phone"
          onChange={handleChange}
          value={values.phone || ""}
          touched={touched.phone}
          error={errors.phone}
          onBlur={handleBlur}
        />
        <Input
          id="email"
          name="Email"
          onChange={handleChange}
          value={values.email || ""}
          touched={touched.email}
          error={errors.email}
          onBlur={handleBlur}
        />
        <Input
          id="id"
          name="Employee ID"
          onChange={handleChange}
          value={values.id || ""}
          touched={touched.id}
          error={errors.id}
          onBlur={handleBlur}
        />

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default EmployeeForm;

/*
<Select id={currentUser["id"]} configure="false" name="Employee#" />
*/
