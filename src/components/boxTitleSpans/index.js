import importCss from "../../utils/importCss/index.js"
import Element from "../elements/element.js"
import { DivTitleSpanBills, DivTitleSpanWallet, DivTitleSpanWalletGoals } from "../shared/titleSpan/index.js"


importCss('./components/boxTitleSpans/index.css')


export const BoxTitleWallet = {
    build: (props) => {
        const _divTitleSpans = DivTitleSpanWallet.build(props)

        const _BoxTitleWallet = Element({
            type: 'div',
            class: ['box-title-spans-wallet'],
            sons: [_divTitleSpans]
        })
        return _BoxTitleWallet
    }
}

export const BoxTitleWalletGoals = {
    build: () => {
        const _divTitleSpans = DivTitleSpanWalletGoals.build()

        const _BoxTitleWallet = Element({
            type: 'div',
            class: ['box-title-spans'],
            sons: [_divTitleSpans]
        })
        return _BoxTitleWallet
    }
}
export const BoxTitletBills = {
    build: (props) => {
        const _divTitleSpans = DivTitleSpanBills.build(props)

        const _BoxTitleWallet = Element({
            type: 'div',
            class: ['box-title-spans-bills'],
            sons: [_divTitleSpans]
        })
        return _BoxTitleWallet
    }
}