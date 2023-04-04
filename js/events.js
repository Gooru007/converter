import vars from "./vars.js";
import { onChangeHandler, onInputHandler, onSubmitHandler } from "./convert.js";

const { selects, amountInput, form } = vars;

selects.forEach((select) => {
  select.addEventListener("change", onChangeHandler);
});

amountInput.addEventListener("input", onInputHandler);

form.addEventListener("submit", onSubmitHandler);
