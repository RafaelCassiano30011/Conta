import importCss from "../../utils/importCss/index.js"
import Element from "../elements/element.js"

importCss('./components/dialer/index.css')
const DialerWrapper = {
    build: () => {
        const span1 = Element({
            type: 'span',
            text: '1'
        })
        const _dialerNumber1 = Element({
            type: 'div',
            class: ['dialer-number'],
            sons: [span1]
        })
        const span2 = Element({
            type: 'span',
            text: '2'
        })
        const _dialerNumber2 = Element({
            type: 'div',
            class: ['dialer-number'],
            sons: [span2]
        })
        const span3 = Element({
            type: 'span',
            text: '3'
        })
        const _dialerNumber3 = Element({
            type: 'div',
            class: ['dialer-number'],
            sons: [span3]
        })

        const span4 = Element({
            type: 'span',
            text: '4'
        })
        const _dialerNumber4 = Element({
            type: 'div',
            class: ['dialer-number'],
            sons: [span4]
        })
        const span5 = Element({
            type: 'span',
            text: '5'
        })
        const _dialerNumber5 = Element({
            type: 'div',
            class: ['dialer-number'],
            sons: [span5]
        })

        const span6 = Element({
            type: 'span',
            text: '6'
        })
        const _dialerNumber6 = Element({
            type: 'div',
            class: ['dialer-number'],
            sons: [span6]
        })
        const span7 = Element({
            type: 'span',
            text: '7'
        })
        const _dialerNumber7 = Element({
            type: 'div',
            class: ['dialer-number'],
            sons: [span7]
        })

        const span8 = Element({
            type: 'span',
            text: '8'
        })
        const _dialerNumber8 = Element({
            type: 'div',
            class: ['dialer-number'],
            sons: [span8]
        })
        const span9 = Element({
            type: 'span',
            text: '9'
        })
        const _dialerNumber9 = Element({
            type: 'div',
            class: ['dialer-number'],
            sons: [span9]
        })
        const _dialerNumberNone = Element({
            type: 'div',
            class: ['dialer-number-none'],

        })
        const span0 = Element({
            type: 'span',
            text: '0'
        })

        const _dialerNumber0 = Element({
            type: 'div',
            class: ['dialer-number'],
            sons: [span0]
        })
        const _backSpace = Element({
            type: 'img',
            src: './utils/img/backspace.png'
        })

        const _divBoxSpace = Element({
            type: 'div',
            class: ['box-backspace'],
            sons: [_backSpace]

        })
        const dialers = [_dialerNumber0, _dialerNumber1, _dialerNumber2, _dialerNumber3, _dialerNumber4, _dialerNumber5, _dialerNumber6, _dialerNumber7, _dialerNumber8, _dialerNumber9]
        for (let i = 0; i < dialers.length; i++) {
            const dialer = dialers[i]
            dialer.addEventListener('click', () => {
                const number = i

            })
        }


        const _dialerWrapper = Element({
            type: 'div',
            class: ['dialer-wrapper'],
            sons: [_dialerNumber1, _dialerNumber2, _dialerNumber3,
                _dialerNumber4, _dialerNumber5, _dialerNumber6,
                _dialerNumber7, _dialerNumber8, _dialerNumber9,
                _dialerNumberNone, _dialerNumber0, _divBoxSpace
            ]

        })
        return _dialerWrapper
    },
}
export default DialerWrapper