import { useState, useEffect } from "react";
import Input from "../../common/input";
import Calendar from "../../common/calendar";
import Information from "./informationText";
import DateTable from "./dateTable";
import { useFormik } from "formik";
import OverTimeSchema from "../../schemas/overTimeSchema";
import ReqFieldIcon from "../../common/reqFieldIcon";
import ReqFieldMsg from "../../common/reqFieldMsg";

const OverTime = () => {
  const [payP, setPayP] = useState();

  useEffect(() => {
    setFieldValue("payPeriod", payP);
  }, [payP]);

  const formik = useFormik({
    initialValues: {
      name: "",
      employeeNumber: "",
      payPeriod: "",
      email: "",
      reason: "",
      date: "",
      startTime: "",
      endTime: "",
      totalHours: "",
    },
    validationSchema: OverTimeSchema,
    onSubmit: () => {
      console.log("Form Submitted");
    },
  });

  const {
    setFieldValue,
    values,
    handleChange,
    errors,
    handleSubmit,
    touched,
    handleBlur,
  } = formik;
  console.log(formik);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          className="container sm"
          style={{ height: 1000, width: 650, backgroundColor: "#f2f2f2" }}
        >
          <div style={{ textAlign: "center" }}>
            <h3>OverTime Form for DOA Employees</h3>
            <p>
              Please fill out the required fields and press submit once
              completed
            </p>
          </div>
          <div className="input-group " style={{ height: 150, width: 600 }}>
            <div className="input-group">
              <div
                style={{
                  width: 200,
                  height: 90,
                  marginRight: 50,
                }}
              >
                <Input
                  id="name"
                  name="Name"
                  value={values.name || ""}
                  onChange={handleChange}
                  error={errors.name}
                  onBlur={handleBlur}
                  onTouch={touched.name}
                  style={{ width: 200 }}
                />
              </div>
              <div style={{ height: 90, width: 200 }}>
                <Input
                  id="employeeNumber"
                  name="Employee Number"
                  value={values.employeeNumber || ""}
                  onChange={handleChange}
                  error={errors.employeeNumber}
                  onBlur={handleBlur}
                  onTouch={touched.employeeNumber}
                  style={{ width: 200 }}
                />
              </div>
            </div>
            <div className="input-group">
              <div
                style={{
                  width: 200,
                  height: 90,
                  marginRight: 50,
                }}
              >
                <div>
                  <Calendar
                    id="payPeriod"
                    label="PPE"
                    selected={payP || ""}
                    onChange={(e) => setPayP(e)}
                    error={errors.payPeriod}
                    onBlur={handleBlur}
                    onTouch={touched.payPeriod}
                  />
                </div>
              </div>
              <div style={{ height: 90, width: 200 }}>
                <Input
                  id="email"
                  name="Email"
                  value={values.email || ""}
                  onChange={handleChange}
                  error={errors.email}
                  onBlur={handleBlur}
                  onTouch={touched.email}
                  style={{ width: 200 }}
                />
              </div>
            </div>
          </div>
          <div style={{ marginTop: 50 }}>
            <Information />
          </div>

          <div>
            <h6>
              JUSTIFICATION <ReqFieldIcon />
            </h6>
            <textarea
              id="reason"
              value={values.reason}
              onChange={handleChange}
              style={{ width: 600, height: 60 }}
            ></textarea>
            <ReqFieldMsg error={errors.reason} onTouch={touched.reason} />
          </div>
          <div style={{ marginTop: 5 }}>
            <h5>OVERTIME HOURS</h5>
            <p style={{ fontSize: 11.5, color: "red" }}>
              Enter time in a 24 hr format. Midnight equals 0000 during Start
              Time and 2400 during End Time
            </p>
          </div>
          <div style={{ marginTop: 20, width: 630 }}>
            <DateTable />
          </div>
          <div>
            <button
              style={{ marginTop: 100 }}
              className="btn btn-primary"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OverTime;
