import importCss from "../../../utils/importCss/index.js"
import Element from "../../elements/element.js"

importCss('./components/shared/input/input.css')

export const InputWalletData = {
    build: () => {
        const _inputWalletData = Element({
            type: 'input',
            class: ['input-wallet-data'],
            placeholder: '26/04/2021'
        })
        return _inputWalletData
    }
}

export const InputWalletPlot = {
    build: () => {
        const _inputWalletPlot = Element({
            type: 'input',
            class: ['input-wallet-plots'],
            placeholder: '1 Vez'
        })
        return _inputWalletPlot
    }
}

export const InputObs = {
    build: () => {
        const _inputObs = Element({
            type: 'input',
            class: ['input-obs'],
            placeholder: 'Obs...'
        })
        return _inputObs
    }
}
export const InputNameGoals = {
    build: () => {
        const _inputNameGoals = Element({
            type: 'input',
            placeholder: 'Nome da Meta',
            class: ['input-name-goals']
        })
        return _inputNameGoals
    }
}