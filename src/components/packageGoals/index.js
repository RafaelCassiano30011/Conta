import importCss from "../../utils/importCss/index.js"
import Element from "../elements/element.js"
import { button } from "../shared/button/index.js"
import titleBlue from "../shared/titleBlue/index.js"
import { WrapperAccountGoals } from "../wrapperAccount/index.js"
import DialerWrapperGoals from "./dialerGoals.js"



importCss('./components/packageGoals/index.css')

const DivPackageGoals = {
    build: () => {
        const _titleBlue = titleBlue.build({
            text: 'Metas'
        })


        const _wrapperAccountGoals = WrapperAccountGoals.build()
        const _button = button.build('Novas Metas')
        const _divPackageGoals = Element({
            type: 'div',
            class: ['package-goals', ],
            sons: [_titleBlue, _wrapperAccountGoals, _button, ]
        })
        return _divPackageGoals
    }
}

export default DivPackageGoals