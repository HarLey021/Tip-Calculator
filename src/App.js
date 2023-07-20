import { useState } from "react";
import Calculator from "./Components/Calculator";

function App() {
  const [billInput, setBillInput] = useState("");
  const [peopleInput, setPeopleInput] = useState("");
  const [selectedPercentage, setSelectedPercentage] = useState("");
  const [customPercentage, setCustomPercentage] = useState("");
  const [disableReset, setDisableReset] = useState(true);
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [calculatedTotal, setCalculatedTotal] = useState(0);
  const [showError, setShowError] = useState(false);
  return (
    <Calculator
      billInput={billInput}
      peopleInput={peopleInput}
      selectedPercentage={selectedPercentage}
      setBillInput={setBillInput}
      setPeopleInput={setPeopleInput}
      setSelectedPercentage={setSelectedPercentage}
      customPercentage={customPercentage}
      setCustomPercentage={setCustomPercentage}
      disableReset={disableReset}
      setDisableReset={setDisableReset}
      calculatedTip={calculatedTip}
      setCalculatedTip={setCalculatedTip}
      calculatedTotal={calculatedTotal}
      setCalculatedTotal={setCalculatedTotal}
      showError={showError}
      setShowError={setShowError}
    />
  );
}

export default App;
