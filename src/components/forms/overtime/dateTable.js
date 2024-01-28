import { useState } from "react";
import { useField, Field } from "formik";

const DateTable = (...props) => {
  const tableHeader = ["Date", "Start Time", "End Time", "Total Hours"];
  const { value } = props[0].field;

  return (
    <div>
      <table className="table-border">
        <thead>
          <tr>
            {tableHeader.map((header) => (
              <th key={header}>
                {header}
                <i
                  className="cog-asterisk"
                  style={{ fontSize: 15, color: "darkred" }}
                  aria-hidden="true"
                >
                  *
                </i>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Field name="date" type="date" placeholder="Enter Date" />
            </td>
            <td>
              <Field
                type="time"
                name="startTime"
                placeholder="Enter Start Time"
              />
            </td>
            <td>
              <Field type="time" name="endTime" placeholder="Enter End Time" />
            </td>
            <td>
              <Field
                name="totalHours"
                style={{ width: 50 }}
                placeholder="Enter Total Hours"
                type="text"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DateTable;
