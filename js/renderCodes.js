import vars from "./vars.js";
import state from "./state.js";

const { selects } = vars;

function renderCodeList() {
  selects.forEach((select) => {
    const options = [];
    state.codes.forEach((codeArr) => {
      const [code, name] = codeArr;
      const option = document.createElement("option");
      option.value = code;
      option.textContent = `${code} | ${name}`;
      options.push(option);
    });
    select.prepend(...options);
  });
}
export { renderCodeList };
