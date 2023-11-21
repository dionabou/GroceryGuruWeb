import React from "react";
import "../styles/SelectButton.css";

export const SelectButton = ({ className }) => {
  return (
    <div className={`select-button ${className}`}>
      <div className="overlap-group-2">
        <div className="rectangle-2" />
        <div className="text-wrapper-34">Select</div>
      </div>
    </div>
  );
};