import Element from "../../components/elements/element.js"
import importCss from "../../utils/importCss/index.js"

importCss('./components/WrapperValueTags/index.css')
const WrapperValueTag = {
    build: (props) => {
        const { text } = props

        const _tagSpanMoney = Element({
            type: 'span',
            class: ['tag-span-money'],
            text: text.toLocaleString('pt_BR')
        })

        const _tagMoneySimboly = Element({
            type: 'span',
            class: ['tag-money-simboly'],
            text: 'R$'
        })

        const _tagMoney = Element({
            type: 'div',
            class: ['tag-money'],
            sons: [_tagMoneySimboly, _tagSpanMoney]

        })

        const _xIcon = Element({
            type: 'img',
            class: ['x-icon'],
            src: './utils/img/letra-x.png'
        })

        const _wrapperValueTag = Element({
            type: 'div',
            class: ['wrapper-value-tag'],
            sons: [_xIcon, _tagMoney]

        })
        return _wrapperValueTag
    }
}
export default WrapperValueTag