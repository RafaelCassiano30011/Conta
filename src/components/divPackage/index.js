import importCss from "../../utils/importCss/index.js"
import Element from "../elements/element.js"
import { DivTitleSpanBills, TitleSpanBillsData } from "../shared/titleSpan/index.js"
import wrapperAccount from "../wrapperAccount/index.js"
// import { WrapperAccount, WrapperAccountBills } from "../wrapperAccount/index.js"

importCss('./components/divPackage/index.css')

export const DivPackage = {
    build: () => {
        const _wrapperAccount = wrapperAccount()

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
        const _wrapperAccount = wrapperAccount('Bills')
        const dataTitle = TitleSpanBillsData.build('17/05')

        const _divPackage = Element({
            type: 'div',
            class: ['package'],
            sons: [dataTitle, _wrapperAccount]
        })
        return _divPackage
    }
}