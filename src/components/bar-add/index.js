import importCss from "../../utils/importCss/index.js"
import Element from "../elements/element.js"

importCss('./components/bar-add/index.css')

const BarAdd = {
    build: () => {
        const _addRevenue = Element({
            type: 'div',
            class: ['add-revenue'],
            text: 'Receita'
        })

        const _addExpenses = Element({
            type: 'div',
            class: ['add-expenses'],
            text: 'Despesas'
        })

        const _addTransfers = Element({
            type: 'div',
            class: ['add-transfers'],
            text: 'Transferencias'
        })

        const _barAdd = Element({
            type: 'div',
            class: ['bar-add'],
            sons: [_addRevenue, _addExpenses, _addTransfers]
        })
        return _barAdd
    }
}

export default BarAdd