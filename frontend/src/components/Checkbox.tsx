import { ChangeEvent } from "react";
import "../css/checkbox.css";

type CheckboxProps = {
  name: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
};

const Checkbox = ({
  checked,
  disabled,
  name,
  onChange,
  value
}: CheckboxProps) => {
  return (
    <div className="wrapper">
      <input
        name={name}
        type="checkbox"
        value={value}
        id={name}
        aria-hidden="true"
        className="substituted"
        onChange={onChange}
        disabled={disabled}
        checked={checked}
      />
      <label htmlFor={name}></label>
    </div>
  );
};

export default Checkbox;
