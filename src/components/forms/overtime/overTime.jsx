import Input from "../../common/input";
import Information from "./informationText";
import DateTable from "./dateTable";
import { Formik, Form, Field, ErrorMessage } from "formik";
import OverTimeSchema from "../../schemas/overTimeSchema";
import ReqFieldIcon from "../../common/reqFieldIcon";
import ReqFieldMsg from "../../common/reqFieldMsg";

const OverTime = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          employeeNumber: "",
          payPeriod: "",
          email: "",
          reason: "",
          date: "",
          startTime: "",
          endTime: "",
          totalHours: "",
        }}
        validationSchema={OverTimeSchema}
        onSubmit={(values) => {
          setTimeout(() => {
            console.log("Form is Submitted", values);
          }, 400);
        }}
      >
        <Form>
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
                  <Input name="name" label="Name" style={{ width: 200 }} />
                </div>
                <div style={{ height: 90, width: 200 }}>
                  <Input
                    name="employeeNumber"
                    label="Employee Number"
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
                    <Input name="payPeriod" label="PPE" type="date" />
                  </div>
                </div>
                <div style={{ height: 90, width: 200 }}>
                  <Input name="email" label="Email" style={{ width: 200 }} />
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
                name="reason"
                style={{ width: 600, height: 60 }}
              ></textarea>
              <label
                style={{
                  color: "light",
                  fontSize: 12,
                  textAlign: "center",
                  backgroundColor: "#f8d7da",
                  borderRadius: 3,
                }}
              >
                <ErrorMessage name="reason" />
              </label>
            </div>
            <div style={{ marginTop: 5 }}>
              <h5>OVERTIME HOURS</h5>
              <p style={{ fontSize: 11.5, color: "red" }}>
                Enter time in a 24 hr format. Midnight equals 0000 during Start
                Time and 2400 during End Time
              </p>
            </div>
            <div style={{ marginTop: 20, width: 630 }}>
              <Field component={DateTable} />
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
        </Form>
      </Formik>
    </>
  );
};

export default OverTime;
