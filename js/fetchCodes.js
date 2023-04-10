import state from "./state.js";
import vars from "./vars.js";
import { renderCodeList } from "./renderCodes.js";

const { success } = vars;

async function fetchCodes() {
  try {
    const response = await fetch(`${state.url}/codes`);
    const data = await response.json();
    console.log(data);
    if (data.result === success) {
      state.codes = data.supported_codes;
      renderCodeList();
    }
  } catch (err) {
    console.log(err);
  }
}

export { fetchCodes };
