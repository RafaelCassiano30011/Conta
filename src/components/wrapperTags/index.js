import importCss from "../../utils/importCss/index.js"
import Element from "../elements/element.js"

importCss('./components/WrapperTags/index.css')

const DivWrapperTag = {
    build: () => {

        const _iconAdd = Element({
            type: 'img',
            src: './utils/img/sinal-de-adicao.png'
        })

        const _spanTag = Element({
            type: 'span',
            text: 'tag'
        })
        const _spanTagAdd = Element({
            type: 'span',
            text: 'Adiconar'
        })

        const _tagAdd = Element({
            type: 'div',
            class: ['tags-add'],
            sons: [_spanTagAdd, _iconAdd]
        })
        const _tag = Element({
            type: 'div',
            class: ['tag'],
            sons: [_spanTag, ]

        })

        const _wrapperTags = Element({
            type: 'div',
            class: ['wrapper-tags'],
            sons: [_tag, _tagAdd]

        })
        return _wrapperTags
    }
}

export default DivWrapperTag