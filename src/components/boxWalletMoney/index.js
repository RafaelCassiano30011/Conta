import importCss from "../../utils/importCss/index.js"
import Element from "../elements/element.js"


importCss('./components/boxWalletMoney/index.css')

const BoxWalletMoney = {
    build: (props) => {
        const { value } = props

        const _walletMoneySimboly = Element({
            type: 'span',
            class: ['wallet-money-simboly'],
            text: 'R$'
        })

        const _walletSpanMoney = Element({
            type: 'span',
            class: ['wallet-span-money'],
            text: value
        })

        const _boxWalletMoney = Element({
            type: 'div',
            class: ['box-wallet-money'],
            sons: [_walletMoneySimboly, _walletSpanMoney]
        })
        return _boxWalletMoney
    }

}

export default BoxWalletMoney