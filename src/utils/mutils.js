export function setContentHeight (com ,dom, h) {
    com.$nextTick(() => {
        dom.style.height = (document.body.clientHeight - h) + 'px'
    })
}