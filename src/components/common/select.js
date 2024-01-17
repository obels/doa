import React, { useState, useEffect } from "react";
import { getEmployeeDivision } from "../employeeData";

const Select = ({ id, name }) => {
  const data = getEmployeeDivision();

  const [editDiv, setEditDiv] = useState(false);

  function renderDivision() {
    if (!editDiv) {
      return (
        <select id={id}>
          <option key={id} value={id}>
            {id}
          </option>
        </select>
      );
    }
    if (editDiv) {
      return (
        <select id={id}>
          {data.map((path) => (
            <option key={path} value={path}>
              {path}
            </option>
          ))}
        </select>
      );
    }
  }

  return (
    <div style={{ marginTop: 20, marginBottom: 20 }}>
      <label htmlFor={id}> {name}</label>
      <br />
      {renderDivision()}
      <button
        type="button"
        onClick={() => setEditDiv(!editDiv)}
        className="btn btn-secondary btn-sm m-1"
      >
        Edit
      </button>
    </div>
  );
};
export default Select;
