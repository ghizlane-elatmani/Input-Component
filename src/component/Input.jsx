import React from "react";
import "../css/Input.css";

const Input = ({
  error,
  disabled,
  helperText,
  startIcon,
  endIcon,
  value,
  size,
  fullWidth,
  multiline,
}) => {
  let className = `input-container width ${size} ${error ? "error" : ""} ${
    disabled ? "disabled" : ""
  } ${fullWidth ? "full-width" : ""}`;

  if (multiline > 1) {
    return (
      <div className="form-group">
        <label className="label" htmlFor="input">
          Label
        </label>

        <textarea
          className="width"
          placeholder="Placeholder"
          cols="40"
          rows={multiline}
        ></textarea>
      </div>
    );
  }

  return (
    <div className="form-group">
      <label className="label" htmlFor="input">
        Label
      </label>
      <div className={className}>
        {startIcon}
        <input
          className="input"
          value={value}
          id="input"
          type="text"
          placeholder="Placeholder"
          disabled={disabled}
        />
        {endIcon}
      </div>
      <p className={`helper-text ${error ? "helper-text-error" : ""}`}>
        {helperText}
      </p>
    </div>
  );
};

Input.defaultProps = {
  error: false,
  disabled: false,
  startIcon: " ",
  endIcon: " ",
  size: "md",
  fullWidth: false,
  value: "",
};

export default Input;
