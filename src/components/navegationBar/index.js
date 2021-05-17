import importCss from "../../utils/importCss/index.js"
import Element from "../elements/element.js"
import { buttonNavegation } from "../shared/button/index.js"

importCss('./components/navegationBar/index.css')
const NavegationBar = {
    build: () => {
        const _navegationBarImg1 = Element({
            type: 'img',
            src: './utils/img/poligonoNavegationBar.png'
        })
        const _navegationBarImg2 = Element({
            type: 'img',
            src: './utils/img/poligonoNavegationBar.png'
        })

        const _navegationBarImg3 = Element({
            type: 'img',
            src: './utils/img/poligonoNavegationBar.png'
        })
        const _navegationBarImg4 = Element({
            type: 'img',
            src: './utils/img/poligonoNavegationBar.png'
        })
        const _buttonNavegation = buttonNavegation.build()
        const _navegationBar = Element({
            type: 'div',
            class: ['navegation-bar'],
            sons: [_navegationBarImg1, _navegationBarImg2, _buttonNavegation, _navegationBarImg3, _navegationBarImg4]
        })
        return _navegationBar
    }
}
export default NavegationBar