import importCss from "../../../utils/importCss/index.js"
import Element from "../../elements/element.js"

importCss('./components/shared/titleSpan/index.css')

export const DivTitleSpanWallet = {
    build: (props) => {
        const { text } = props

        const titleSpan2 = Element({
            type: 'span',
            class: ['title-span-2'],
            text: text
        })

        const titleSpan = Element({
            type: 'span',
            class: ['title-span'],
            text: 'Carteira'
        })

        const _divTitleSpans = Element({
            type: 'div',
            class: ['box-title-spans-wallet'],
            sons: [titleSpan, titleSpan2]
        })
        return _divTitleSpans
    }
}
export const DivTitleSpanWalletGoals = {
    build: () => {
        const titleSpan = Element({
            type: 'span',
            class: ['title-span'],
            text: 'Carteira'
        })
        const _divTitleSpans = Element({
            type: 'div',
            class: ['box-title-spans-wallet-goals'],
            sons: [titleSpan]
        })
        return _divTitleSpans
    }
}
export const DivTitleSpanBills = {
    build: (typetext, text) => {
        const titleSpan = Element({
            type: 'span',
            class: ['title-span'],
            text: typetext
        })
        const titleSpan2 = Element({
            type: 'span',
            class: ['title-span-2'],
            text: 'Conta'
        })


        const _divTitleSpans = Element({
            type: 'div',
            class: ['box-title-spans-bills'],
            sons: [titleSpan, titleSpan2]
        })
        return _divTitleSpans
    }
}