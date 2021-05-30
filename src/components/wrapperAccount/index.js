import data from "../../data/index.js"
import importCss from "../../utils/importCss/index.js"
import boxTitle from "../boxTitleSpans/index.js"

import BoxWalletMoney from "../boxWalletMoney/index.js"
import Element from "../elements/element.js"
import BarGoals from "../shared/barGoals/index.js"
import { IconRound, IconRoundWallet } from "../shared/icon/index.js"
import { DivTitleSpanBills, TitleSpanBillsData } from "../shared/titleSpan/index.js"

importCss('./components/wrapperAccount/index.css')
importCss('./components/Separator/index.css')



const wrapperAccount = (type) => {

    const WrapperAccount = {
        build: (props) => {
         
           
            const _iconRoundWallet = IconRoundWallet.build()
            const _BoxTitleWallet = boxTitle(null, {
                carteira: props.name,
                conta: 'Conta'
            })
            const _boxWalletMoney = BoxWalletMoney.build({
                value: (1000000).toLocaleString('pt-Br')
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

    const WrapperAccountGoals = {
        build: () => {
            const _iconRoundWallet = IconRoundWallet.build()
            const _BoxTitleWallet = boxTitle('Goals', {
                carteira: 'bradesco'
            })
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

    const WrapperAccountBills = {
        build: () => {
            const _iconRound = IconRound.build()
            const _BoxTitleBills = boxTitle('Bills', {
                type: 'Casa',
                conta: 'Luz'
            })
            const _divTitleSpans = DivTitleSpanBills.build('-100,00', 'nao pago')

            const boxSeparator = Element({
                type: 'div',
                class: ['box-separator'],
                sons: [_iconRound, _BoxTitleBills]
            })

            const _wrapperAccount = Element({
                type: 'div',
                class: ['wrapper-account-div'],
                sons: [boxSeparator, _divTitleSpans]
            })
            return _wrapperAccount
        }
    }
    const wallet=data.walletList(1)
        //retornando o tipo de wrapper que Passar
    if (!type) return WrapperAccount.build(wallet)
    if (type == 'Bills') return WrapperAccountBills.build()
    if (type == 'Goals') return WrapperAccountGoals.build()
}

export default wrapperAccount