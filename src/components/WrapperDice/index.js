import Element from "../../components/elements/element.js"
import importCss from "../../utils/importCss/index.js"
import BoxCheckbox from "../divCheckbox/index.js"
import { InputWalletData, InputWalletPlot } from "../shared/input/index.js"
import titleBlue from "../shared/titleBlue/index.js"

importCss('./components/WrapperDice/index.css')

const WalletDice = {
    build: () => {
        const _divBoxCheckbox = BoxCheckbox.build()
        const _inputWalletData = InputWalletData.build()
        const _inputWalletPlot = InputWalletPlot.build()
        const _titleBlueData = titleBlue.build({
            text: 'Data'
        })

        const _titleBlueParcelas = titleBlue.build({
            text: 'Parcelas'
        })

        const _divWalletPlots = Element({
            type: 'div',
            class: ['wallet-plots'],
            sons: [_titleBlueParcelas, _inputWalletPlot, _divBoxCheckbox]
        })
        const _divWalletData = Element({
            type: 'div',
            class: ['wallet-data'],
            sons: [_titleBlueData, _inputWalletData]
        })

        const _wrapperWalletDice = Element({
            type: 'div',
            class: ['wrapper-wallet-dice'],
            sons: [_divWalletData, _divWalletPlots]
        })
        return _wrapperWalletDice
    }
}
export default WalletDice