import React from "react";

const FormulaBar = ({ formula, setFormula }) => {
  return (
    <div className="formula-bar">
      <label>Formula:</label>
      <input type="text" value={formula} readOnly />
    </div>
  );
};

export default FormulaBar;
