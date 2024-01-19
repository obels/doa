import { useFormik } from "formik";
import { useState, useEffect } from "react";
import UserSchema from "../schemas/directorySchema";
import Input from "../common/input";

const NewEmployee = () => {
  const [userInfo, setUserInfo] = useState();
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    console.log("reset");
  }, [completed]);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      id: "",
      active: "",
    },
    validationSchema: UserSchema,
    onSubmit: (values) => {
      setUserInfo(formik.values);
      console.log("New User Created");
      setCompleted(true);
      console.log(userInfo);
    },
  });

  const { handleChange, handleBlur, values, touched, errors } = formik;

  return (
    <div
      className="container"
      style={{ width: 400, height: 700, backgroundColor: "lightgray" }}
    >
      <h5 style={{ textAlign: "center" }}>New Employee Form</h5>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div style={{ width: 250, height: 500 }}>
            <div>{completed && <h5>New User Created</h5>}</div>
            <Input
              id="name"
              name="Full Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.name}
              error={errors.name}
            />
            <Input
              id="phone"
              name="Phone Number"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.phone}
              error={errors.phone}
            />
            <Input
              id="email"
              name="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.email}
              error={errors.email}
            />
            <Input
              id="id"
              name="Employee Number"
              value={values.id}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.id}
              error={errors.id}
            />
            <div style={{ marginTop: 20 }}>
              <label htmlFor="active">Employee Status: </label>
              <select
                onChange={(e) => (formik.values.active = e.currentTarget.value)}
                id="active"
              >
                <option value=""></option>
                <option value="true">Active</option>
                <option value="false">NotActive</option>
              </select>
            </div>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default NewEmployee;
