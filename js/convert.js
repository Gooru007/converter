import state from "./state.js";
import vars from "./vars.js";
import { getFullName, formatToCurrency } from "./utils.js";
import { createResultTemplate } from "./markups.js";

const { success, resultFrom, resultTo, convesionRate, updateTime } = vars;

function onChangeHandler({ target: { value, name } }) {
  state.pair = {
    ...state.pair,
    [name]: value,
  };

  console.log(state.pair);
}

function onInputHandler({ target: { value, name } }) {
  state[name] = +value;
  console.log(state.amount);
}

async function onSubmitHandler(e) {
  e.preventDefault();

  const {
    url,
    pair: { from, to },
    amount,
  } = state;

  if (!from || !to || !amount) {
    alert("Enter all data!");
    return;
  }

  try {
    const response = await fetch(`${url}/pair/${from}/${to}/${amount}`);
    const data = await response.json();

    console.log(data);

    if (data.result === success) {
      renderResults(data);
    }
  } catch (error) {
    console.log(error);
  }
}

function renderResults({
  conversion_rate: rate,
  conversion_result: result,
  base_code: baseCode,
  target_code: targetCode,
  time_last_update_utc: updateTime,
}) {
  const from = {
    code: baseCode,
    amount: state.amount,
    fullName: getFullName(baseCode, state.codes),
  };

  const to = {
    code: targetCode,
    amount: result,
    fullName: getFullName(targetCode, state.codes),
  };

  resultFrom.innerHTML = createResultTemplate(from);
  resultTo.innerHTML = createResultTemplate(to);

  const baseValue = formatToCurrency(baseCode, 1);
  const targetValue = formatToCurrency(targetCode, rate);

  convesionRate.textContent = `${baseValue} = ${targetValue}`;
}

export { onChangeHandler, onInputHandler, onSubmitHandler };
