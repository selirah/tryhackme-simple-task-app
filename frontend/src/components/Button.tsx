import { MouseEvent, PropsWithChildren } from "react";
import "../css/button.css";
import classnames from "classnames";

type ButtonSize = "sm" | "md" | "lg";
type ButtonType = "button" | "submit" | "reset";
type ButtonColor = "primary" | "error";

type ButtonProps = PropsWithChildren<{
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  block?: boolean;
  color?: ButtonColor;
  disabled?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
}>;

const Button = ({
  block,
  children,
  color,
  disabled,
  onClick,
  size,
  type
}: ButtonProps) => {
  return (
    <button
      className={classnames("button", {
        primary: color === "primary" || !color,
        error: color === "error",
        "button--block": block,
        "button--sm": size === "sm",
        "button--md": size === "md" || !size,
        "button--lg": size === "lg"
      })}
      disabled={disabled}
      type={type ? type : "button"}
      onClick={(e) => (onClick ? onClick(e) : null)}
    >
      {children}
    </button>
  );
};

export default Button;
