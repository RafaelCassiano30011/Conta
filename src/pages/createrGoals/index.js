import Element from "../../components/elements/element.js"
import importCss from "../../utils/importCss/index.js"
import RectangleDiv from '../../components/rectangleDiv/index.js'
import NavegationBar from "../../components/navegationBar/index.js"
import NewPackageGoals from "../../components/packageGoals/CreateGoals.js"

importCss('./global.css')

const ContainerCreaterGoals = {
    build: () => {
        const _rectangleDiv = RectangleDiv.build()
        const _navegationBar = NavegationBar.build()
        const _newPackageGoals = NewPackageGoals.build()

        const _containerCreaterGoals = Element({
            type: 'section',
            class: ['container-creater-goals'],
            sons: [_rectangleDiv, _newPackageGoals, _navegationBar]

        })
        return _containerCreaterGoals
    }
}
export default ContainerCreaterGoals