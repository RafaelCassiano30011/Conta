import importCss from "../../utils/importCss/index.js"
import Element from "../elements/element.js"

importCss('./components/rectangleDiv/index.css')
importCss('./components/shared/icon/icon.css')

const RectangleDiv = {
    build: () => {
        const moneySymbol = Element({
            type: 'span',
            class: ['money-symbol'],
            text: 'R$'
        })
        const rectangleMoney = Element({
            type: 'span',
            class: ['rectangle-money'],
            text: '100.000,00'
        })
        const iconPolygon = Element({
            type: 'img',
            class: ['icon-polygon'],
            src: './utils/img/poligono.png'
        })


        const _rectangleDiv = Element({
            type: 'div',
            class: ['rectangle-div'],
            sons: [moneySymbol, rectangleMoney, iconPolygon]

        })


        return _rectangleDiv
    }
}
export default RectangleDiv