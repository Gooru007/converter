import { getFullName } from "./utils.js";
import state from "./state.js";

function createResultTemplate({ code, amount, fullName }) {
  return `
        <img class="form__result-item-icon" /> 
        <div class="form__result-item-head">
            <p class="form__result-item-code">${code}</p>
            <p class="form__result-item-name">${fullName}</p>
        </div>
        <p class="form__result-item-amount">${amount.toFixed(2)}</p>
    `;
}

function createCurrencyItem({ code, base_code: baseCode, rate = 1 }) {
  const isBase = code === baseCode;
  const fullName = getFullName(code, state.codes);
  const action = getCurrencyItemAction(isBase);

  return `
    <div class='currency__item'>
        <div style='display: flex; gap: 20px;'>
            <p>${code}</p>
            <p>${fullName}</p>
        </div>
        <p>${rate}</p>  
        <div>${action}</div>
    </div>
  `;
}

const getQwerty = (e) => {
  console.log(e.target);
};

function getCurrencyItemAction(isBase) {
  const {
    actions: { remove, change },
  } = state;

  const actionName = isBase ? change : remove;

  return `
    <button class='currency__btn currency__btn--${actionName}' 
    data-action='${actionName}'>
        ${actionName}
    </button>
  `;
}

export { createResultTemplate, createCurrencyItem };
