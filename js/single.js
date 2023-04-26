import state from "./state.js";
import vars from "./vars.js";
import { createCurrencyItem } from "./markups.js";

const { success, currentCurrency, currencyList, addCurrencySelect } = vars;

async function fetchLatest() {
  const {
    url,
    currency: { code },
  } = state;
  try {
    const response = await fetch(`${url}/latest/${code}`);
    const data = await response.json();
    console.log(data);

    if (data.result === success) {
      state.currency = { ...state.currency, ...data };
      renderCurrencies();
    }
    console.log(state);
  } catch (error) {
    //window.location.replace("/404.html");
    console.log(error);
  }
}

function renderCurrencies() {
  const { currency, currencies } = state;
  const { base_code: baseCode, conversion_rates: rates } = currency;

  currentCurrency.innerHTML = createCurrencyItem(currency);
  currencyList.innerHTML = "";

  Object.entries(rates).forEach(([code, rate]) => {
    if (code === baseCode || !currencies.includes(code)) {
      return;
    }
    currencyList.insertAdjacentHTML(
      "afterbegin",
      createCurrencyItem({ code, baseCode, rate })
    );
  });
}

function onActionClickHandler({ target }) {
  if (target.classList.contains("currency__btn")) {
    const { action } = target.dataset;
    const {
      actions: { remove },
    } = state;

    action === remove ? removeCurrencyItem(target) : changeCurrencyItem(target);
  }
}

function removeCurrencyItem(target) {
  target.closest(".currency__item").remove();
}

function changeCurrencyItem(target) {
  target.closest(".currency__single").classList.add("active");
}

function onSingleSelectChangeHandler({ target }) {
  target.closest(".currency__single").classList.remove("active");
  state.currency = {
    ...state.currency,
    code: target.value,
  };
  fetchLatest();
  target.value = "";
}

function onAddCurrencyHandler({ target }) {
  target.closest(".currency__add").classList.add("active");
}

function onCurrencySelectHandler({ target }) {
  const { base_code: baseCode, conversion_rates: rates } = state.currency;

  const currency = Object.entries(rates).find(
    ([code]) => code === target.value && code !== baseCode
  );

  if (currency) {
    const [code, rate] = currency;
    currencyList.insertAdjacentHTML(
      "afterbegin",
      createCurrencyItem({ code, baseCode, rate })
    );
  }

  target.closest(".currency__add").classList.remove("active");
  target.value = "";
}

export {
  fetchLatest,
  onActionClickHandler,
  onSingleSelectChangeHandler,
  onAddCurrencyHandler,
  onCurrencySelectHandler,
};
