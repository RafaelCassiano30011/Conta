import importCss from "../../utils/importCss/index.js"
import Element from "../elements/element.js"
import { WrapperAccount, WrapperAccountBills } from "../wrapperAccount/index.js"

importCss('./components/divPackage/index.css')

export const DivPackage = {
    build: () => {
        const _wrapperAccount = WrapperAccount.build()

        const _divPackage = Element({
            type: 'div',
            class: ['package'],
            sons: [_wrapperAccount]
        })
        return _divPackage
    }
}
export const DivPackageBills = {
    build: () => {
        const _wrapperAccount = WrapperAccountBills.build()

        const _divPackage = Element({
            type: 'div',
            class: ['package'],
            sons: [_wrapperAccount]
        })
        return _divPackage
    }
}