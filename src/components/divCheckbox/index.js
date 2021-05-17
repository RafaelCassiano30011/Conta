import importCss from "../../utils/importCss/index.js"
import Element from "../elements/element.js"

importCss('./components/divCheckbox/index.css')

const BoxCheckbox = {
    build: () => {

        const _spanPlots = Element({
            type: 'span',
            class: ['plots-span'],
            text: 'dividir o valor'
        })

        const _checkbox = Element({
            type: 'div',
            class: ['checkbox-plots']
        })

        const _divBoxCheckbox = Element({
            type: 'div',
            class: ['box-checkbox-plots'],
            sons: [_checkbox, _spanPlots]
        })
        return _divBoxCheckbox
    }
}

export default BoxCheckbox