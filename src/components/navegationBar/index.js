import importCss from "../../utils/importCss/index.js";
import Element from "../elements/element.js";
import { buttonNavegation } from "../shared/button/index.js";
import ContainerBills from "../../pages/bills/index.js";
import ContainerHome from "../../pages/home/index.js";
const $root = document.getElementById("root");

importCss("./components/navegationBar/index.css");
const NavegationBar = {
  build: () => {
    const _navegationBarImg1 = Element({
      type: "img",
      src: "./utils/img/poligonoNavegationBar.png",
    });
    const _navegationBarImg2 = Element({
      type: "img",
      src: "./utils/img/poligonoNavegationBar.png",
    });

    const _navegationBarImg3 = Element({
      type: "img",
      src: "./utils/img/poligonoNavegationBar.png",
    });
    const _navegationBarImg4 = Element({
      type: "img",
      src: "./utils/img/poligonoNavegationBar.png",
    });

    const _navegationBarArray = [
      _navegationBarImg1,
      _navegationBarImg2,
      _navegationBarImg3,
      _navegationBarImg4,
    ];

    for (let i = 0; i < _navegationBarArray.length; i++) {
      const navegationImg = _navegationBarArray[i];
      if (i == 0) {
        navegationImg.addEventListener("click", () => {
          $root.innerHTML = "";
          const containerBills = ContainerBills.build();
          $root.appendChild(containerBills)
        });
      }
      if (i == 1) {
        navegationImg.addEventListener("click", () => {
            $root.innerHTML = "";
            const containerHome = ContainerHome.build();
            $root.appendChild(containerHome)
        });
      }
      if (i == 2) {
        navegationImg.addEventListener("click", () => {});
      }
      if (i == 3) {
        navegationImg.addEventListener("click", () => {});
      }
    }

    const _buttonNavegation = buttonNavegation.build();
    const _navegationBar = Element({
      type: "div",
      class: ["navegation-bar"],
      sons: [
        _navegationBarImg1,
        _navegationBarImg2,
        _buttonNavegation,
        _navegationBarImg3,
        _navegationBarImg4,
      ],
    });
    return _navegationBar;
  },
};
export default NavegationBar;
