import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const Calendar = ({ label, selected, onChange }) => {
  return (
    <div>
      <div style={{ marginBottom: 5 }}>
        <label htmlFor="calendar">{label}</label>
        <i
          className="cog-asterisk"
          style={{ fontSize: 15, color: "darkred" }}
          aria-hidden="true"
        >
          *
        </i>
      </div>
      <DatePicker
        to="calendar"
        selected={selected}
        onChange={onChange}
        placeholderText="Enter or Select Date"
        isClearable
      />
    </div>
  );
};

export default Calendar;
