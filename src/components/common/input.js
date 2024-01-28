import React from "react";
import ReqFieldMsg from "./reqFieldMsg";
import { useField } from "formik";

const Input = ({ label, style, labelstyle, type, ...props }) => {
  const [value, meta] = useField(props);

  console.log(props);

  return (
    <div>
      <label className="col-form-label col-form-label-md" style={labelstyle}>
        {label}
        <i
          className="cog-asterisk"
          style={{ fontSize: 15, color: "darkred" }}
          aria-hidden="true"
        >
          *
        </i>
      </label>
      <input
        style={style}
        type={type || "text"}
        className="form-control form-control-sm"
        {...value}
        {...props}
      />
      <ReqFieldMsg error={meta.error} onTouch={meta.touched} />
    </div>
  );
};

export default Input;
