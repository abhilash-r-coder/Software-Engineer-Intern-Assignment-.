import React, { useState } from react;
import Spreadsheet from "./components/Spreadsheet";
import FormulaBar from "./components/FormulaBar";
import "./App.css";

function App() {
  const [formula, setFormula] = useState("");

  return (
    <div className="app">
      <h1>Google Sheets Clone</h1>
      <FormulaBar formula={formula} />
      <Spreadsheet setFormula={setFormula} />
    </div>
  );
}

export default App;
