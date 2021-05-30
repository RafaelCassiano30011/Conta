import ContainerCreaterGoals from "../../../pages/createrGoals/index.js";
import importCss from "../../../utils/importCss/index.js";
import Element from "../../elements/element.js";
import DialerWrapperGoals from "../../packageGoals/dialerGoals.js";

const $root = document.getElementById("root");

importCss("./components/shared/button/index.css");

export const button = {
  build: (text) => {
    const button = Element({
      type: "button",
      class: ["button"],
      text: text,
    });
    
    button.addEventListener("click", () => {
      $root.innerHTML = "";
      const _containerCreaterGoals = ContainerCreaterGoals.build();
      $root.appendChild(_containerCreaterGoals);
      DialerWrapperGoals.dialerClick()
    });
    return button;
  },
};

export const buttonNavegation = {
  build: () => {
    const button = Element({
      type: "button",
      class: ["button-navegation"],
    });
    return button;
  },
};
