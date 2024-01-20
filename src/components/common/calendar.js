import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const Calendar = ({
  label,
  id,
  selected,
  onChange,
  error,
  onBlur,
  onTouch,
}) => {
  console.log(error);
  console.log(onTouch);
  return (
    <div>
      <div style={{ marginTop: 10, marginBottom: 5 }}>
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
        id={id}
        to="calendar"
        selected={selected}
        onChange={onChange}
        placeholderText="Enter or Select Date"
        onBlur={onBlur}
        isClearable
      />
      {error && onTouch && (
        <p
          style={{
            width: 190,
            color: "light",
            fontSize: 12,
            textAlign: "center",
            backgroundColor: "#f8d7da",
            borderRadius: 3,
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Calendar;
