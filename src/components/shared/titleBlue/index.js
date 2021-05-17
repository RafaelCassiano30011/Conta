import importCss from "../../../utils/importCss/index.js"
import Element from "../../elements/element.js"

importCss('./components/shared/titleBlue/index.css')

const titleBlue = {
    build: (props) => {
        const { text } = props

        const _titleBlue = Element({
            type: 'h4',
            class: ['title-blue'],
            text: text
        })

        return _titleBlue
    }
}

export default titleBlue