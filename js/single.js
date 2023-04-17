import state from "./state.js";
import vars from "./vars.js";

async function fetchLatest() {
  const {
    url,
    singleCurrency: { code },
  } = state;
  try {
    const response = await fetch(`${url}/latest/${code}`);
    const data = await response.json();
    console.log(data);

    // if(data.resullt === error)
  } catch (error) {
    window.location.replace("/404.html");
  }
}

export { fetchLatest };
