import * as Yup from "yup";

const OverTimeSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  employeeNumber: Yup.number()
    .typeError("Employee ID must be a Number")
    .required("Employee Number is required"),
  payPeriod: Yup.string().required("PPE Date is required"),
  email: Yup.string().email().required("Email is required"),
  reason: Yup.string().required("Justification is required"),
  date: Yup.string().required("Date is required"),
  startTime: Yup.number().required("Start Time is required"),
  endTime: Yup.number().required("End Time is required"),
  totalHours: Yup.number().required("Total Hours is required"),
});

export default OverTimeSchema;
