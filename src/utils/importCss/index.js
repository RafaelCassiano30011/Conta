const importCss = (href) => {
    const $head = document.querySelector('head')

    const _link = document.createElement('link')
    _link.setAttribute('rel', 'stylesheet')
    _link.href = href

    $head.appendChild(_link)
}

export default importCss