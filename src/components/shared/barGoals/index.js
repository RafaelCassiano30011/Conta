import Element from "../../elements/element.js"

const BarGoals = {
    build: () => {
        const _barGoals = Element({
            type: 'div',
            class: ['bar-goals']
        })
        return _barGoals
    }
}

export default BarGoals