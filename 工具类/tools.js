/**
 * 获取鼠标在页面中的位置 (兼容写法)
 * @param {*} event 
 */
function getMousePosition(event) {
    // IE678不认识event.pageX/pageY
    var event = event || window.event,
        scrollX = document.documentElement.scrollLeft,
        scrollY = document.documentElement.scrollTop,
        x = event.pageX || scrollX + event.clientX,
        y = event.pageY || scrollY + event.clientY;
    return { "x": x, "y": y }
}