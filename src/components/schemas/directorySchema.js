import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const UserSchema = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Enter a Valid Phone Number")
    .min(8)
    .required("Phone Number is Required"),
  id: Yup.number()
    .typeError("Employee ID Must be a Number")
    .required("Employee ID is Required"),
  email: Yup.string().email().required("Email is required"),
});

export default UserSchema;
