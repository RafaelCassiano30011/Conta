import { DivPackage } from "../../components/divPackage/index.js"
import Element from "../../components/elements/element.js"
import NavegationBar from "../../components/navegationBar/index.js"
import DivPackageGoals from "../../components/packageGoals/index.js"
import RectangleDiv from '../../components/rectangleDiv/index.js'
import importCss from "../../utils/importCss/index.js"


importCss('./global.css')

const ContainerHome = {
    build: () => {
        const _rectangleDiv = RectangleDiv.build()
        const _divPackage = DivPackage.build()
        const _packageGoals = DivPackageGoals.build()
        const _navegationBar = NavegationBar.build()

        const _container = Element({
            type: 'section',
            class: ['container-home'],
            sons: [_rectangleDiv, _divPackage, _packageGoals, _navegationBar]
        })
        return _container
    },
}

export default ContainerHome