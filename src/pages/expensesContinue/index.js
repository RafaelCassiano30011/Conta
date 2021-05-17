import BarAdd from "../../components/bar-add/index.js"
import Element from "../../components/elements/element.js"
import { button } from "../../components/shared/button/index.js"
import { InputObs } from "../../components/shared/input/index.js"
import { WalletModal, WalletModal2 } from "../../components/walletModal/index.js"
import WalletDice from "../../components/WrapperDice/index.js"
import DivWrapperTag from "../../components/wrapperTags/index.js"
import WrapperValueTag from "../../components/WrapperValueTags/index.js"
import importCss from "../../utils/importCss/index.js"
import NavegationBar from "../../components/navegationBar/index.js"
importCss('./global.css')

const ContainerExpensnesContinue = {
    build: () => {
        const _navegationBar = NavegationBar.build()
        const _button = button.build('Concluir')
        const _inputObs = InputObs.build()
        const _wrapperTags = DivWrapperTag.build()
        const _wrapperWalletDice = WalletDice.build()
        const _walletModal = WalletModal.build()
        const _walletModal2 = WalletModal2.build()

        const _wrapperValueTag = WrapperValueTag.build({
            text: '100.000,00'
        })

        const _barAdd = BarAdd.build()

        const _container = Element({
            type: 'section',
            class: ['container-expenses-continue'],
            sons: [_barAdd, _wrapperValueTag, _walletModal, _walletModal2, _wrapperWalletDice, _wrapperTags, _inputObs, _button, _navegationBar]
        })
        return _container
    },
}
export default ContainerExpensnesContinue