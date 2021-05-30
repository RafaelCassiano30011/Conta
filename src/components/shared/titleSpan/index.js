import importCss from "../../../utils/importCss/index.js"
import Element from "../../elements/element.js"

importCss('./components/shared/titleSpan/index.css')

export const DivTitleSpanWallet = {
    build: (props) => {


        const titleSpan2 = Element({
            type: 'span',
            class: ['title-span-2'],
            text: props.conta
        })

        const titleSpan = Element({
            type: 'span',
            class: ['title-span'],
            text: props.carteira
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
    build: (props) => {
        const titleSpan = Element({
            type: 'span',
            class: ['title-span'],
            text: props.carteira
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
    build: (props) => {
        const titleSpan = Element({
            type: 'span',
            class: ['title-span'],
            text: props.type
        })
        const titleSpan2 = Element({
            type: 'span',
            class: ['title-span-2'],
            text: props.conta
        })


        const _divTitleSpans = Element({
            type: 'div',
            class: ['box-title-spans-bills'],
            sons: [titleSpan, titleSpan2]
        })
        return _divTitleSpans
    }
}


export const TitleSpanBillsData = {
    build: (text) => {
        const titleSpan = Element({
            type: 'span',
            class: ['title-span'],
            text: text
        })
        return titleSpan

    }
}