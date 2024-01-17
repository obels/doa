import React from "react";

const Input = ({
  onChange,
  id,
  value,
  name,
  error,
  onBlur,
  touched,
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
      {error && touched && (
        <div>
          <p
            style={{ height: 30, fontSize: 12 }}
            className="alert alert-danger"
          >
            {error}
          </p>
        </div>
      )}
    </div>
  );
};

export default Input;
