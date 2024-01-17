import React from "react";
import { Link } from "react-router-dom";
import "./Table.css";

function Table(props) {
  const columnHead = [
    { name: "Name", path: "name" },
    { name: "Phone", path: "phone" },
    { name: "Email", path: "email" },
    { name: "Employee#", path: "id" },
    { name: "Active", path: "active" },
  ];

  const { employeeData, onColumnSelect, onActiveSelect, currentActive } = props;

  const handleIcon = (path) => {
    const { currentColumn } = props;
    if (currentColumn.path !== path) return null;
    if (currentColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    else {
      return <i className="fa fa-sort-desc" />;
    }
  };

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          {columnHead.map((column) => (
            <th
              style={{ cursor: "pointer", backgroundColor: "#f2f2f2" }}
              key={column.name}
              onClick={() => onColumnSelect(column.path)}
            >
              {column.name}
              {handleIcon(column.path)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {employeeData.map((data) => (
          <tr key={data.name}>
            <td style={{ cursor: "pointer", backgroundColor: "lightgray" }}>
              <Link to={`./employeeform/` + data.id}>{data["name"]}</Link>
            </td>

            <td style={{ backgroundColor: "lightgray" }}>{data["phone"]}</td>
            <td style={{ backgroundColor: "lightgray" }}>{data["email"]}</td>
            <td style={{ backgroundColor: "lightgray" }}>{data["id"]}</td>
            <td style={{ backgroundColor: "lightgray" }}>
              <i
                onClick={() => onActiveSelect(data)}
                className={
                  data.active === currentActive ? "fa fa-user-o" : "fa fa-user"
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
