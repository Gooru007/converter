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
      tab.classList.remove("active");
    });

    target.classList.add("active");

    tabContents.forEach((content) => {
      if (content.dataset.tabContent === activeTab) {
        content.classList.add("show");
      } else {
        content.classList.remove("show");
      }
    });

    state.currentTab = activeTab;
  }
}
export { onTabClickHandler };
