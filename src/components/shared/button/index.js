import importCss from "../../../utils/importCss/index.js"
import Element from "../../elements/element.js"
importCss('./components/shared/button/index.css')

export const button = {
    build: (text) => {
        const button = Element({
            type: 'button',
            class: ['button'],
            text: text,
        })
        return button
    }
}

export const buttonNavegation = {
    build: () => {
        const button = Element({
            type: 'button',
            class: ['button-navegation'],
        })
        return button
    }
}