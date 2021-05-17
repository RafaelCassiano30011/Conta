import importCss from "../../utils/importCss/index.js";
import Element from "../elements/element.js";
import { IconRoundWallet } from "../shared/icon/index.js"
import { BoxTitleWallet, BoxTitleWalletGoals } from "../boxTitleSpans/index.js"
import BoxWalletMoney from "../boxWalletMoney/index.js"
importCss('./components/walletModal/index.css')
export const WalletModal = {
    build: () => {
        const _boxWalletMoney = BoxWalletMoney.build({
            value: '100.000,00'
        })

        const _iconRoundWallet = IconRoundWallet.build()
        const _BoxTitleWallet = BoxTitleWallet.build({
            text: 'Nubank'
        })

        const boxSeparator = Element({
            type: 'div',
            class: ['box-separator'],
            sons: [_iconRoundWallet, _BoxTitleWallet]
        })

        const _walletModal = Element({
            type: 'div',
            class: ['wallet-modal'],
            sons: [boxSeparator, _boxWalletMoney]
        })
        return _walletModal
    }
}
export const WalletModal2 = {
    build: () => {

        const _iconRoundWallet = IconRoundWallet.build()
        const _BoxTitleWallet = BoxTitleWallet.build({
            text: 'Nome'
        })
        const _plusSign = Element({
            type: 'img',
            src: './utils/img/sinal-de-adicao.png'
        })

        const _boxAdd = Element({
            type: 'div',
            class: ['box-add'],
            sons: [_plusSign]
        })

        const boxSeparator = Element({
            type: 'div',
            class: ['box-separator'],
            sons: [_iconRoundWallet, _BoxTitleWallet]
        })

        const _walletModal = Element({
            type: 'div',
            class: ['wallet-modal'],
            sons: [boxSeparator, _boxAdd]
        })
        return _walletModal
    }
}