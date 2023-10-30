import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/datepicker.css";

type DatepickerProps = {
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  name?: string;
  onChange: (value: Date | null) => void;
  value: Date | null;
};

const Datepicker = ({
  disabled,
  label,
  maxDate,
  minDate,
  name,
  onChange,
  placeholder,
  value
}: DatepickerProps) => {
  return (
    <>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <DatePicker
        className="input"
        placeholderText={placeholder}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
        popperClassName="date-popper"
        calendarClassName="calendar"
        disabled={disabled}
        maxDate={maxDate}
        minDate={minDate}
        selected={value}
        wrapperClassName="datepicker"
      />
    </>
  );
};

export default Datepicker;
