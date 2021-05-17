import importCss from "../../utils/importCss/index.js"
import { BoxTitletBills, BoxTitleWallet, BoxTitleWalletGoals } from "../boxTitleSpans/index.js"
import BoxWalletMoney from "../boxWalletMoney/index.js"
import Element from "../elements/element.js"
import BarGoals from "../shared/barGoals/index.js"
import { IconRound, IconRoundWallet } from "../shared/icon/index.js"

importCss('./components/wrapperAccount/index.css')
importCss('./components/Separator/index.css')

export const WrapperAccount = {
    build: () => {
        const _iconRoundWallet = IconRoundWallet.build()
        const _BoxTitleWallet = BoxTitleWallet.build({
            text: 'Bradesco'
        })
        const _boxWalletMoney = BoxWalletMoney.build({
            value: '100.000,00'
        })

        const boxSeparator = Element({
            type: 'div',
            class: ['box-separator'],
            sons: [_iconRoundWallet, _BoxTitleWallet]
        })

        const _wrapperAccount = Element({
            type: 'div',
            class: ['wrapper-account-div'],
            sons: [boxSeparator, _boxWalletMoney]
        })
        return _wrapperAccount
    }
}

export const WrapperAccountGoals = {
    build: () => {
        const _iconRoundWallet = IconRoundWallet.build()
        const _BoxTitleWallet = BoxTitleWalletGoals.build()
        const _boxWalletMoney = BoxWalletMoney.build({
            value: '100.000,00'
        })
        const _barGoals = BarGoals.build()

        const boxSeparator = Element({
            type: 'div',
            class: ['box-separator'],
            sons: [_iconRoundWallet, _BoxTitleWallet]
        })

        const _wrapperAccount = Element({
            type: 'div',
            class: ['wrapper-account-div'],
            sons: [boxSeparator, _barGoals, _boxWalletMoney]
        })
        return _wrapperAccount
    }
}

export const WrapperAccountBills = {
    build: () => {
        const _iconRound = IconRound.build()
        const _BoxTitleBills = BoxTitletBills.build('Tipo', 'Conta')


        const boxSeparator = Element({
            type: 'div',
            class: ['box-separator'],
            sons: [_iconRound, _BoxTitleBills]
        })

        const _wrapperAccount = Element({
            type: 'div',
            class: ['wrapper-account-div'],
            sons: [boxSeparator, ]
        })
        return _wrapperAccount
    }
}