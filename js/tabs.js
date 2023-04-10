import vars from "./vars.js";
import state from "./state.js";

const { tabs } = vars;

function onTabClickHandler({ target }) {
  if (target.classList.contains("tab")) {
    const activeTab = target.dataset.tab;
    const tabContents = document.querySelectorAll(".content");

    if (activeTab === state.currentTab) {
      return;
    }

    [...tabs.children].forEach((tab) => {
      console.log(tab);
    });
  }
}
export { onTabClickHandler };
