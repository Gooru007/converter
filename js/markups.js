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

export { createResultTemplate };
