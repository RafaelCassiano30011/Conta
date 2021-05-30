import importCss from "../../utils/importCss/index.js";
import Element from "../elements/element.js";
import { button } from "../shared/button/index.js";
import { InputNameGoals, InputWalletData } from "../shared/input/index.js";
import { WalletModal2 } from "../walletModal/index.js";
import DialerWrapperGoals from "./dialerGoals.js";

importCss("./components/packageGoals/index.css");

const NewPackageGoals = {
  build: (props) => {
    const _inputNameGoals = InputNameGoals.build();
    const _inputWalletData = InputWalletData.build();
    const _walletModal2 = WalletModal2.build();
    const _dialerWrapperGoals = DialerWrapperGoals.build();
    const _button = button.build("Criar Meta");

   

    const spanSymbolMoney = Element({
      type: "span",
      text: "R$",
      class: ["span-symbol-number"],
    });

    const spanTextMoney = Element({
      type: "span",
      text: "0".toLocaleString("pt-BR"),
      class: ["span-dialed-number"],
    });
    const _boxValue = Element({
      type: "div",
      class: ["box-value-dialed"],
      sons: [spanSymbolMoney, spanTextMoney],
    });

    const _titleEndGoals = Element({
      type: "h3",
      class: ["title-end-goals"],
      text: "Final da Meta",
    });

    const _boxEndGoals = Element({
      type: "div",
      class: ["box-end-goals"],
      sons: [_titleEndGoals, _inputWalletData],
    });
    

    const _newPackageGoals = Element({
      type: "div",
      class: ["package-goals-new"],
      sons: [
        _walletModal2,
        _inputNameGoals,
        _boxEndGoals,
        _boxValue,
        _dialerWrapperGoals,
        _button,
      ],
    });
    return _newPackageGoals;
  },
};

export default NewPackageGoals;
