import importCss from "../../utils/importCss/index.js"
import Element from "../elements/element.js"

importCss('./components/insertedMoney/index.css')
const InsertedMoney = {
    build: (props) => {

        const _symmbolInsertedMoney = Element({
            type: 'span',
            class: ['inserted-money-symbol', 'red-title'],
            text: 'R$'
        })

        const _spanInsertedTitle = Element({
            type: 'span',
            class: ['inserted-money-title', props.class],
            text: props.text
        })


        const _insertedMoney = Element({
            type: 'div',
            class: ['inserted-money'],
            sons: [_symmbolInsertedMoney, _spanInsertedTitle]
        })
        return _insertedMoney
    }
}
export default InsertedMoney