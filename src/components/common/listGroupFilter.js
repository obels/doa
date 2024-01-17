import React from "react";

export const ListGroup = (props) => {
  const { onDivisionSelect } = props;

  const divisionList = [
    { title: "All Division", path: "" },
    { title: "AIRSIDE OPERATIONS", path: "AIRSIDE OPERATIONS" },
    { title: "TERMINAL OPERATIONS", path: "TERMINAL OPERATIONS" },
    { title: "INFORMATION SYSTEMS", path: "INFORMATION SYSTEMS" },
    { title: "FINANCE", path: "FINANCE" },
    { title: "SECURITY", path: "SECURITY" },
  ];
  return (
    <span className="dropdown" style={{ marginRight: 5 }}>
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Division Filter
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {divisionList.map((division) => (
          <li key={division.title}>
            <button
              onClick={() => onDivisionSelect(division)}
              className="dropdown-item"
            >
              {division.title}
            </button>
          </li>
        ))}
      </ul>
    </span>
  );
};
