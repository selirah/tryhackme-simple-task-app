import { PropsWithChildren } from "react";
import classnames from "classnames";
import "../css/alert.css";

type AlertColor = "success" | "error";

type AlertProps = PropsWithChildren<{
  color: AlertColor;
}>;

const Alert = ({ children, color }: AlertProps) => {
  return (
    <div
      className={classnames("alert", {
        "alert--error": color === "error",
        "alert--success": color === "success"
      })}
      role="alert"
    >
      {children}
    </div>
  );
};

export default Alert;
