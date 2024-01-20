import React from "react";
import ReqFieldMsg from "./reqFieldMsg";

const Input = ({
  onChange,
  id,
  value,
  name,
  error,
  onBlur,
  onTouch,
  style,
  labelstyle,
}) => {
  return (
    <div>
      <label
        className="col-form-label col-form-label-md"
        style={labelstyle}
        htmlFor={id}
      >
        {name}
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
        type="text"
        className="form-control form-control-sm"
        onChange={onChange}
        value={value}
        id={id}
        onBlur={onBlur}
      />
      <ReqFieldMsg error={error} onTouch={onTouch} />
    </div>
  );
};

export default Input;
