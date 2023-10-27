import { ChangeEvent, LegacyRef } from "react";
import "../css/input.css";

type InputProps = {
  value?: string;
  label?: string;
  name: string;
  error?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  ref?: LegacyRef<HTMLInputElement>;
  placeholder?: string;
  disabled?: boolean;
};

const Input = ({
  label,
  error,
  name,
  value,
  onChange,
  placeholder,
  ref,
  disabled
}: InputProps) => {
  return (
    <>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input
        type="text"
        id={name}
        value={value}
        placeholder={placeholder}
        ref={ref}
        disabled={disabled}
        onChange={onChange}
      />
      {error ? <span>Error</span> : null}
    </>
  );
};

export default Input;
