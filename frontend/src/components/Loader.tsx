import "../css/loader.css";
import classnames from "classnames";

type LoaderProps = {
  size: "sm" | "md" | "lg";
};

const Loader = ({ size }: LoaderProps) => {
  return (
    <div aria-label="Loading..." role="status" className="loader">
      <svg
        viewBox="0 0 50 50"
        className={classnames("loading-svg", {
          "loading-svg--sm": size === "sm",
          "loading-svg--md": size === "md",
          "loading-svg--lg": size === "lg"
        })}
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="3.0"
          stroke="#000000"
        />
      </svg>
    </div>
  );
};

export default Loader;
