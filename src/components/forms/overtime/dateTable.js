import DatePicker from "react-datepicker";
import { useState } from "react";

const DateTable = () => {
  const tableHeader = ["Date", "Start Time", "End Time", "Total Hours"];
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [totalHours, setTotalHours] = useState();

  console.log(tableHeader);
  console.log(date);
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
              <DatePicker
                selected={date}
                onChange={(e) => setDate(e)}
                placeholderText="Enter or Select Date"
                isClearable
              />
            </td>
            <td>
              <input
                type="text"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                placeholder="Enter Start Time"
              />
            </td>
            <td>
              <input
                type="text"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                placeholder="Enter End Time"
              />
            </td>
            <td>
              <input
                value={(endTime - startTime) / 100 || ""}
                style={{ width: 50 }}
                placeholder="Hours"
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
