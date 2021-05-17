import Element from "../../components/elements/element.js"
import importCss from "../../utils/importCss/index.js"
import RectangleDiv from '../../components/rectangleDiv/index.js'
import { DivPackageBills, } from "../../components/divPackage/index.js"

importCss('./global.css')

const ContainerBills = {
    build: () => {
        const _rectangleDiv = RectangleDiv.build()
        const _divPackage = DivPackageBills.build()

        const _container = Element({
            type: 'section',
            class: ['container-bills'],
            sons: [_rectangleDiv, _divPackage]
        })

        return _container
    }

}
export default ContainerBills