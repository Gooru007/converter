import vars from "./vars.js";
import {
  onChangeHandler,
  onInputHandler,
  onSubmitHandler,
  onSwitchHandler,
} from "./convert.js";
import { onTabClickHandler } from "./tabs.js";

const { selects, amountInput, form, switchBtn, tabs } = vars;

selects.forEach((select) => {
  select.addEventListener("change", onChangeHandler);
});

amountInput.addEventListener("input", onInputHandler);

form.addEventListener("submit", onSubmitHandler);

switchBtn.addEventListener("click", onSwitchHandler);

tabs.addEventListener("click", onTabClickHandler);
