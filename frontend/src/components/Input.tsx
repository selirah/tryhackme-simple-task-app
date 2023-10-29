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
  type?: "text" | "password" | "email";
};

const Input = ({
  label,
  error,
  name,
  value,
  onChange,
  placeholder,
  ref,
  disabled,
  type
}: InputProps) => {
  return (
    <>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input
        type={type ? type : "text"}
        id={name}
        value={value}
        placeholder={placeholder}
        ref={ref}
        disabled={disabled}
        onChange={onChange}
        className="input"
      />
      {error ? <span className="error">Error</span> : null}
    </>
  );
};

export default Input;
