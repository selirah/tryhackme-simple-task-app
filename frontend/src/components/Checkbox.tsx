import { ChangeEvent } from "react";
import "../css/checkbox.css";

type CheckboxProps = {
  name: string;
  disabled?: boolean;
  value?: number | string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  label?: string;
};

const Checkbox = ({
  checked,
  disabled,
  name,
  onChange,
  value,
  label
}: CheckboxProps) => {
  return (
    <div className="wrapper">
      <input
        name={name}
        type="checkbox"
        value={value}
        id={name}
        aria-hidden="true"
        className="checkbox-custom"
        onChange={onChange}
        disabled={disabled}
        checked={checked}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
