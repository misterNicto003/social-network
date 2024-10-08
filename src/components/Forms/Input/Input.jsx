import React from "react";
import "./input.scss";

const Input = ({
  className,
  value,
  placeholder,
  name,
  required = true,
  type = "text",
  textarea,
  onChange,
}) => {
  return (
    <div className={`field ${value ? "active" : ""}`}>
      <div className="field_label fs-14">
        {/* {placeholder} {required && <span>*</span>} */}
      </div>

      <div className="field_input">
        {textarea ? (
          <textarea
            className={className}
            name={name}
            defaultValue={value || ""}
            type={type}
            onChange={onChange}
            required
          />
        ) : (
          <input
            className={className}
            name={name}
            defaultValue={value || ""}
            type={type}
            onChange={onChange}
            required
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
