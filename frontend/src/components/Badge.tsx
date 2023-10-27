import { PropsWithChildren, MouseEvent } from "react";
import "../css/badge.css";
import classnames from "classnames";

type BadgeColor = "info" | "warning" | "success" | "error";

type BadgeProps = PropsWithChildren<{
  color: BadgeColor;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}>;

const Badge = ({ color, onClick, children }: BadgeProps) => {
  return (
    <button
      className={classnames("badge", {
        "badge--warning": color === "warning",
        "badge--info": color === "info",
        "badge--success": color === "success",
        "badge--error": color === "error"
      })}
      onClick={(e) => (onClick ? onClick(e) : null)}
    >
      {children}
    </button>
  );
};

export default Badge;
