import importCss from "../../utils/importCss/index.js"
import Element from "../elements/element.js"
import { DivTitleSpanBills, DivTitleSpanWallet, DivTitleSpanWalletGoals } from "../shared/titleSpan/index.js"


importCss('./components/boxTitleSpans/index.css')

const boxTitle = (type, props) => {
    const BoxTitleWallet = {
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

    const BoxTitleWalletGoals = {
        build: (props) => {
            const _divTitleSpans = DivTitleSpanWalletGoals.build(props)

            const _BoxTitleWallet = Element({
                type: 'div',
                class: ['box-title-spans'],
                sons: [_divTitleSpans]
            })
            return _BoxTitleWallet
        }
    }
    const BoxTitletBills = {
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
    if (!type) return BoxTitleWallet.build(props)
    if (type == 'Goals') return BoxTitleWalletGoals.build(props)
    if (type == 'Bills') return BoxTitletBills.build(props)
}
export default boxTitle