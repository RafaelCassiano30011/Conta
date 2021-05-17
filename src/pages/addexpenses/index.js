import BarAdd from "../../components/bar-add/index.js"
import Element from "../../components/elements/element.js"
import { button } from "../../components/shared/button/index.js"
import NavegationBar from "../../components/navegationBar/index.js"
import importCss from "../../utils/importCss/index.js"
import InsertedMoney from "../../components/insertedMoney/index.js"
import DialerWrapper from "../../components/dialer/index.js"

importCss('./global.css')

const ContainerAddExpenses = {
    build: () => {
        const _barAdd = BarAdd.build()
        const _button = button.build('Continuar')
        const _insertedMoney = InsertedMoney.build({
            text: '100.000,00',
            class: 'red-title'
        })
        const _dialerWrapper = DialerWrapper.build()
        const _navegationBar = NavegationBar.build()
        const _containerAddExpenses = Element({
            type: 'section',
            class: ['container-add-expenses'],
            sons: [_barAdd, _insertedMoney, _dialerWrapper, _button, _navegationBar]
        })
        return _containerAddExpenses
    }
}
export default ContainerAddExpenses