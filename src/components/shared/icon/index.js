import importCss from "../../../utils/importCss/index.js"
import Element from "../../elements/element.js"

importCss('./components/shared/icon/icon.css')

export const IconRoundWallet = {
    build: () => {
        const _iconWallet = Element({
            type: 'img',
            class: ['icon-wallet'],
            src: './utils/img/wallet.png'
        })

        const IconRoud = Element({
            type: 'div',
            class: ['icon-round'],
            sons: [_iconWallet]
        })
        return IconRoud
    }

}

export const IconRound = {
    build: () => {

        const IconRoud = Element({
            type: 'div',
            class: ['icon-round'],

        })
        return IconRoud
    }
}