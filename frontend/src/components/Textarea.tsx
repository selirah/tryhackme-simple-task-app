import { ChangeEvent, LegacyRef } from "react";
import "../css/input.css";

type TextProps = {
  value?: string;
  label?: string;
  name: string;
  error?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  ref?: LegacyRef<HTMLTextAreaElement>;
  placeholder?: string;
  disabled?: boolean;
  type?: "text" | "password" | "number";
};

const Textarea = ({
  label,
  error,
  name,
  value,
  onChange,
  placeholder,
  ref,
  disabled
}: TextProps) => {
  return (
    <>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <textarea
        id={name}
        value={value}
        placeholder={placeholder}
        ref={ref}
        disabled={disabled}
        onChange={onChange}
        rows={4}
        className="input"
      ></textarea>
      {error ? <span className="error">Error</span> : null}
    </>
  );
};

export default Textarea;
