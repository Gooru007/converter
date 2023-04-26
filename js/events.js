import vars from "./vars.js";
import {
  onChangeHandler,
  onInputHandler,
  onSubmitHandler,
  onSwitchHandler,
} from "./convert.js";
import { onTabClickHandler } from "./tabs.js";
import {
  onActionClickHandler,
  onSingleSelectChangeHandler,
  onAddCurrencyHandler,
  onCurrencySelectHandler,
} from "./single.js";

const {
  selects,
  amountInput,
  form,
  switchBtn,
  tabs,
  currentCurrency,
  currencyList,
  singleSelect,
  addCurrencyBtn,
  addCurrencySelect,
} = vars;

selects.forEach((select) => {
  if (select.classList.contains("select-pair")) {
    select.addEventListener("change", onChangeHandler);
  }
});

amountInput.addEventListener("input", onInputHandler);

form.addEventListener("submit", onSubmitHandler);

switchBtn.addEventListener("click", onSwitchHandler);

tabs.addEventListener("click", onTabClickHandler);

currentCurrency.addEventListener("click", onActionClickHandler);

currencyList.addEventListener("click", onActionClickHandler);

singleSelect.addEventListener("change", onSingleSelectChangeHandler);

addCurrencyBtn.addEventListener("click", onAddCurrencyHandler);

addCurrencySelect.addEventListener("change", onCurrencySelectHandler);
