import "./Calculator.css";
import logo from "./images/logo.svg";
import iconDollar from "./images/icon-dollar.svg";
import iconPerson from "./images/icon-person.svg";

export default function Calculator({
  billInput,
  peopleInput,
  selectedPercentage,
  setBillInput,
  setPeopleInput,
  setSelectedPercentage,
  customPercentage,
  setCustomPercentage,
  disableReset,
  setDisableReset,
  calculatedTip,
  setCalculatedTip,
  calculatedTotal,
  setCalculatedTotal,
  showError,
  setShowError,
}) {
  //This function handles Bill inputs. Checks if the number is positive and changes states.
  function handleBillInput(event) {
    const billInputValue = event.target.value;

    if (billInputValue === "" || parseFloat(billInputValue) > 0) {
      setBillInput(billInputValue);
      setDisableReset(false);
    } else {
      event.preventDefault();
    }
  }

  //This function handles percentage button klicks and changes states based on that.
  function handlePercentageClick(percent) {
    setSelectedPercentage(percent);
    setCustomPercentage("");
    setDisableReset(false);
  }

  //This function handles custom percentage inputs and changes states. Also prevents the input to be positive.
  function handleCustomPercentageClick(event) {
    const customPercentageValue = event.target.value;

    if (
      customPercentageValue === "" ||
      parseFloat(customPercentageValue) > "0"
    ) {
      setCustomPercentage(customPercentageValue);
      setSelectedPercentage(customPercentageValue);
      setDisableReset(false);
    } else {
      event.preventDefault();
    }
  }

  //This function handles number of people and throws error message if the number equals to 0, by changing states.
  function handlePeopleInput(event) {
    const peopleInputValue = event.target.value;

    if (peopleInputValue === "" || parseFloat(peopleInputValue) > "0") {
      setPeopleInput(peopleInputValue);
      setDisableReset(false);
      setShowError(false);
    } else if (peopleInputValue === "0") {
      setPeopleInput(peopleInputValue);
      setShowError(true);
      setDisableReset(false);
    } else {
      event.preventDefault();
    }
  }

  //This function handles resetting all entered values and changed styles.
  function handleReset() {
    setBillInput("");
    setSelectedPercentage("");
    setCustomPercentage("");
    setPeopleInput("");
    setDisableReset(true);
    setShowError(false);
  }

  //These conditions prevent the calculation not to be done, when number of people in people input equals to 0.
  if (peopleInput > 0) {
    setCalculatedTip(((billInput / 100) * selectedPercentage) / peopleInput);
    setCalculatedTotal(billInput / peopleInput + calculatedTip);
  } else {
    setCalculatedTip(0);
    setCalculatedTotal(0);
  }

  //These two lines of code rounds the calculated numbers, so in the result number there will be only two digits after the dot.
  let roundedTipPerPerson = calculatedTip.toFixed(2);
  let roundedTotalPerPerson = calculatedTotal.toFixed(2);

  return (
    <div className="main-container">
      <img className="splitter-logo" src={logo} />
      <div className="calculator-container">
        <div className="customer-input-container">
          <div className="bill-container">
            <p className="bill-p">Bill</p>
            <div className="bill-input-container">
              <input
                className={`bill-input ${
                  billInput !== "" ? "input-entered" : ""
                }`}
                type="number"
                placeholder="0"
                onChange={handleBillInput}
                value={billInput}
              />
              <img className="icon-dollar" src={iconDollar} />
            </div>
          </div>
          <div className="tip-container">
            <p className="tip-p">Select Tip %</p>
            <div className="tip-percent-container">
              <button
                className={`percent-container _1 ${
                  selectedPercentage === 5 ? "selected" : ""
                }`}
                onClick={() => {
                  handlePercentageClick(5);
                }}
              >
                5%
              </button>

              <button
                className={`percent-container _2 ${
                  selectedPercentage === 10 ? "selected" : ""
                }`}
                onClick={() => {
                  handlePercentageClick(10);
                }}
              >
                10%
              </button>
              <button
                className={`percent-container _3 ${
                  selectedPercentage === 15 ? "selected" : ""
                }`}
                onClick={() => {
                  handlePercentageClick(15);
                }}
              >
                15%
              </button>
              <button
                className={`percent-container _4 ${
                  selectedPercentage === 25 ? "selected" : ""
                }`}
                onClick={() => {
                  handlePercentageClick(25);
                }}
              >
                25%
              </button>
              <button
                className={`percent-container _5 ${
                  selectedPercentage === 50 ? "selected" : ""
                }`}
                onClick={() => {
                  handlePercentageClick(50);
                }}
              >
                50%
              </button>
              <input
                type="number"
                placeholder="Custom"
                className={`percent-container _6 ${
                  customPercentage !== "" ? "input-entered" : ""
                }`}
                onChange={handleCustomPercentageClick}
                value={customPercentage}
              />
            </div>
          </div>
          <div className="people-container">
            <div className="people-text-container">
              <p className="people-p">Number of People</p>
              {showError && <p className="not-zero">Can’t be zero</p>}
            </div>

            <div className="people-input-container">
              <input
                className={`people-input ${
                  peopleInput !== "" ? "input-entered" : ""
                } ${peopleInput === "0" ? "red-border" : ""}`}
                type="number"
                placeholder="0"
                onChange={handlePeopleInput}
                value={peopleInput}
              />
              <img className="icon-person" src={iconPerson} />
            </div>
          </div>
        </div>

        <div className="summary-container">
          <div className="calculated-tip-container">
            <div className="calculated-tip-text-container">
              <p className="tip-amount-p">Tip Amount</p>
              <p className="person-p">/ person</p>
            </div>
            <p className="tip-amount-value">
              $
              {billInput === "" ||
              selectedPercentage === "" ||
              peopleInput === ""
                ? "0.00"
                : roundedTipPerPerson}
            </p>
          </div>
          <div className="calculated-total-container">
            <div className="calculated-total-text-container">
              <p className="total-amount-p">Total</p>
              <p className="person-p">/ person</p>
            </div>
            <p className="total-amount-value">
              $
              {billInput === "" ||
              selectedPercentage === "" ||
              peopleInput === ""
                ? "0.00"
                : roundedTotalPerPerson}
            </p>
          </div>
          <button
            className={`reset-btn ${disableReset ? "disabled-reset" : ""}`}
            onClick={handleReset}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
